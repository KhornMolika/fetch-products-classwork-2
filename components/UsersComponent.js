export const UsersComponent = (user) => {
  const {
    name: { firstname, lastname },
    username,
    email,
  } = user;
  return`
  <div
        class="w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex flex-col items-center p-6">
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            ${firstname || "no firstname"} ${lastname || "no lastname"}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400"
            >${username || "no username"}</span
          >
          <span class="text-sm text-gray-500 dark:text-gray-400"
            >${email || "no email"}</span
          >
        </div>
      </div>
  `;
};
