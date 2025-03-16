function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 mx-auto my-20 max-w-sm p-8 rounded-lg shadow-lg sm: p-4 max-w-xs md:p-8 sm:p-4 md:max-w-sm text-xl  hover:shadow-xl">
        <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out" />
        <h1 className="text-xl text-blue-800 my-4  sm: text-lg md: md:text-xl hover:text-blue-500">John Doe</h1>
        <p className="text-gray-600 text-base sm: text-sm md: text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;