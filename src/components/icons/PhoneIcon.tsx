import { component$ } from "@builder.io/qwik";

const PhoneIcon = component$(({ class: className }: { class?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      class={className}
    >
      <path
        d="M26.9229 25.9575L27.8226 25.0629L25.7333 22.9617L24.8338 23.8564L26.9229 25.9575ZM30.8441 24.6882L34.6179 26.7397L36.033 24.1367L32.2592 22.0851L30.8441 24.6882ZM35.3444 30.8171L32.5383 33.6073L34.6274 35.7084L37.4335 32.9183L35.3444 30.8171ZM30.8285 34.5056C27.9645 34.7725 20.5547 34.5347 12.5321 26.5576L10.443 28.6587C19.1976 37.3637 27.5301 37.7888 31.1034 37.4558L30.8285 34.5056ZM12.5321 26.5576C4.88495 18.9538 3.61821 12.5585 3.46052 9.78396L0.502336 9.95208C0.700775 13.4441 2.26931 20.5315 10.443 28.6587L12.5321 26.5576ZM15.2488 14.3496L15.8153 13.7863L13.7262 11.6852L13.1597 12.2485L15.2488 14.3496ZM16.2663 6.60561L13.7755 3.2784L11.4036 5.05408L13.8943 8.38131L16.2663 6.60561ZM5.3982 2.55421L2.29775 5.63705L4.38692 7.73815L7.48736 4.65531L5.3982 2.55421ZM14.2043 13.2991C13.1597 12.2485 13.1569 12.2513 13.1569 12.2513L13.154 12.2542L13.1481 12.2602C13.1441 12.2643 13.1399 12.2685 13.1357 12.2729C13.1271 12.2818 13.1181 12.2914 13.1085 12.3018C13.0895 12.3224 13.0686 12.3461 13.0462 12.3728C13.0014 12.4263 12.9506 12.4921 12.8973 12.5708C12.7904 12.7286 12.6739 12.9372 12.575 13.1996C12.3733 13.7351 12.2651 14.4408 12.4007 15.3148C12.6659 17.024 13.843 19.2817 16.8583 22.2799L18.9474 20.1787C16.1256 17.373 15.4534 15.6655 15.3286 14.8606C15.2692 14.4775 15.3308 14.289 15.3478 14.2443C15.358 14.2167 15.363 14.2139 15.3503 14.2327C15.344 14.242 15.3335 14.2564 15.3172 14.2759C15.3091 14.2856 15.2994 14.2966 15.2881 14.3089C15.2824 14.3151 15.2765 14.3215 15.2697 14.3283C15.2666 14.3317 15.2632 14.3351 15.2597 14.3387L15.2543 14.3441L15.2516 14.3468C15.2516 14.3468 15.2488 14.3496 14.2043 13.2991ZM16.8583 22.2799C19.8746 25.279 22.1428 26.4462 23.8548 26.7089C24.7297 26.843 25.4351 26.736 25.9702 26.5366C26.2325 26.4389 26.4415 26.3237 26.5995 26.2178C26.6785 26.1649 26.7445 26.1145 26.798 26.0701C26.8249 26.048 26.8486 26.0272 26.8693 26.0083C26.8798 25.9988 26.8895 25.9899 26.8984 25.9814C26.9029 25.977 26.9071 25.9729 26.9112 25.9689L26.9172 25.963L26.9201 25.9603C26.9201 25.9603 26.9229 25.9575 25.8783 24.9068C24.8338 23.8564 24.8366 23.8536 24.8366 23.8536L24.8393 23.8508L24.8447 23.8455C24.8484 23.8421 24.8518 23.8388 24.8551 23.8354C24.862 23.8289 24.8686 23.823 24.8747 23.8172C24.8869 23.8062 24.898 23.7965 24.9079 23.7886C24.9272 23.7724 24.9416 23.7621 24.9505 23.756C24.9689 23.7438 24.9652 23.7493 24.9359 23.7602C24.8875 23.7781 24.6937 23.84 24.3042 23.7801C23.4878 23.6551 21.7683 22.9835 18.9474 20.1787L16.8583 22.2799ZM13.7755 3.2784C11.7621 0.588837 7.8028 0.163257 5.3982 2.55421L7.48736 4.65531C8.53759 3.61102 10.4028 3.71731 11.4036 5.05408L13.7755 3.2784ZM3.46052 9.78396C3.42166 9.10029 3.73522 8.38613 4.38692 7.73815L2.29775 5.63705C1.23638 6.6924 0.40197 8.18633 0.502336 9.95208L3.46052 9.78396ZM32.5383 33.6073C31.9955 34.1471 31.4135 34.4511 30.8285 34.5056L31.1034 37.4558C32.5545 37.3205 33.7434 36.5874 34.6274 35.7084L32.5383 33.6073ZM15.8153 13.7863C17.76 11.8526 17.9046 8.79403 16.2663 6.60561L13.8943 8.38131C14.6914 9.44596 14.5729 10.8434 13.7262 11.6852L15.8153 13.7863ZM34.6179 26.7397C36.2333 27.6179 36.485 29.6829 35.3444 30.8171L37.4335 32.9183C40.081 30.2858 39.2646 25.8933 36.033 24.1367L34.6179 26.7397ZM27.8226 25.0629C28.5812 24.3087 29.8021 24.1218 30.8441 24.6882L32.2592 22.0851C30.1187 20.9214 27.4623 21.2428 25.7333 22.9617L27.8226 25.0629Z"
        fill="#0A66C2"
      />
    </svg>
  );
});

export default PhoneIcon;
