const WhatsAppButton = () => {
  const phoneNumber = "+8801723954334"; // Replace with your WhatsApp number
  const message = encodeURIComponent("Hello, I am interested in your services."); // Customize your message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="flex justify-center items-center bg-green-500 p-[6px] rounded-lg w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-2 sm:space-x-0 sm:space-x-reverse sm:flex-row-reverse text-white font-semibold hover:bg-green-600 transition duration-300 px-2 py-1 rounded-lg w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          className="w-[30px] h-[30px]"
        >
          <path d="M20.52 3.48A11.892 11.892 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.103.547 4.156 1.593 5.967L0 24l6.238-1.625A11.914 11.914 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.241-6.197-3.48-8.52zM12 22.1a10.056 10.056 0 0 1-5.42-1.563l-.388-.23-3.7.964.992-3.576-.25-.405A10.09 10.09 0 0 1 1.9 12c0-5.623 4.478-10.1 10.1-10.1a10.095 10.095 0 0 1 10.1 10.1c0 5.622-4.478 10.1-10.1 10.1zM16.45 13.946c-.268-.134-1.59-.786-1.836-.875-.244-.09-.422-.134-.598.135-.175.268-.688.876-.843 1.05-.155.175-.31.2-.578.068-.268-.134-1.13-.415-2.154-1.323-.796-.708-1.334-1.58-1.49-1.847-.156-.268-.017-.414.117-.548.123-.123.268-.32.403-.48.135-.156.18-.268.27-.446.09-.178.045-.336-.022-.469-.067-.134-.598-1.448-.818-1.977-.216-.52-.435-.448-.6-.448-.155-.007-.336-.01-.518-.01-.181 0-.474.067-.724.336-.249.268-.947.922-.947 2.24 0 1.319.97 2.593 1.105 2.777.135.183 1.907 2.916 4.625 4.092.646.28 1.15.448 1.544.574.648.206 1.238.177 1.7.107.519-.078 1.591-.648 1.815-1.273.223-.624.223-1.157.155-1.273-.068-.116-.244-.183-.512-.317z" />
        </svg>
        {/* <span className="hidden sm:inline text-sm sm:text-base lg:text-lg">WhatsApp</span> */}
      </a>
    </div>
  );
};

export default WhatsAppButton;
