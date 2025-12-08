// logout.js
document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Create modern logout modal (once) ---
    function createLogoutModal() {
        if (document.getElementById("logout-modal")) return; // avoid duplicates

        const modal = document.createElement("div");
        modal.id = "logout-modal";
        modal.className =
            "fixed inset-0 z-50 hidden items-center justify-center bg-black/40";

        modal.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 p-6 relative">
                <!-- Accent bar -->
               

                <!-- Icon + title -->
                <div class="flex items-center space-x-3 mt-2 mb-3">
                    <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <i class="fas fa-right-from-bracket text-blue-600"></i>
                    </div>
                    <div>
                        <h2 class="text-lg font-semibold text-gray-900">Log out</h2>
                        <p class="text-sm text-gray-500">Are you sure you want to logout?</p>
                    </div>
                </div>

                <!-- Divider -->
                <div class="border-t border-gray-200 my-4"></div>

                <!-- Buttons -->
                <div class="flex justify-end gap-3">
                    <button
                        id="logoutCancelBtn"
                        class="px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:bg-gray-50">
                        Cancel
                    </button>
                    <button
                        id="logoutConfirmBtn"
                        class="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-sm  text-white flex items-center gap-2">
                       
                        Log out
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    createLogoutModal();

    const modal = document.getElementById("logout-modal");
    const confirmBtn = document.getElementById("logoutConfirmBtn");
    const cancelBtn = document.getElementById("logoutCancelBtn");

    function openLogoutModal() {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    }

    function closeLogoutModal() {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }

    // Close when clicking outside the card
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeLogoutModal();
        }
    });

    // Buttons inside modal
    cancelBtn.addEventListener("click", closeLogoutModal);

    confirmBtn.addEventListener("click", () => {
        // Clear session/local storage
        localStorage.clear();
        sessionStorage.clear();

        // Redirect to login page (adjust path if needed)
        window.location.href = "../login.html";
    });

    // --- 2. Attach to .signout-btn after sidebar loads (same idea as before) ---
    const observer = new MutationObserver(() => {
        const logoutBtn = document.querySelector(".signout-btn");

        if (logoutBtn) {
            observer.disconnect(); // Stop watching once button exists

            logoutBtn.addEventListener("click", (e) => {
                e.preventDefault();
                openLogoutModal();
            });
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
});
