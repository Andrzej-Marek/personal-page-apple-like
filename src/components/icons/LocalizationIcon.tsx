import { component$ } from "@builder.io/qwik";

const LocalizationIcon = component$(
  ({ class: className }: { class?: string }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        class={className}
      >
        <g clip-path="url(#clip0_879_25699)">
          <path
            d="M20.0001 0C11.6749 0 4.90186 6.77307 4.90186 15.0982C4.90186 18.5396 7.32203 23.6388 12.0952 30.254C15.5797 35.0832 19.1149 39.0176 19.1502 39.0568L20 40L20.8499 39.0568C20.8852 39.0177 24.4203 35.0834 27.9048 30.254C32.678 23.6387 35.0982 18.5396 35.0982 15.0982C35.0983 6.77307 28.3252 0 20.0001 0ZM20 36.5631C15.7607 31.6793 7.1899 20.6565 7.1899 15.0982C7.18979 8.03464 12.9365 2.28793 20.0001 2.28793C27.0638 2.28793 32.8104 8.03464 32.8104 15.0982C32.8104 20.6531 24.2393 31.6781 20 36.5631Z"
            fill="#0A66C2"
          />
          <path
            d="M20 20.7832C23.1398 20.7832 25.685 18.2379 25.685 15.0981C25.685 11.9584 23.1398 9.41309 20 9.41309C16.8602 9.41309 14.3149 11.9584 14.3149 15.0981C14.3149 18.2379 16.8602 20.7832 20 20.7832Z"
            fill="#0A66C2"
          />
        </g>
        <defs>
          <clipPath id="clip0_879_25699">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

export default LocalizationIcon;
