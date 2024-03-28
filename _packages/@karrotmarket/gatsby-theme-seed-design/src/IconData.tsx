import * as React from 'react';

export const iconData: Record<string, React.ReactNode> = {
  icon_backward_regular: (
    // biome-ignore lint/a11y/noSvgWithoutTitle: no title needed
    <svg
      id="icon_backward_regular"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-karrot-ui-icon="true"
    >
      <g>
        <path
          d="M12.5661 19.4344C12.8785 19.7468 12.8785 20.2533 12.5661 20.5657C12.2537 20.8782 11.7472 20.8782 11.4348 20.5657L3.43475 12.5657C3.12234 12.2533 3.12234 11.7468 3.43475 11.4344L11.4348 3.43436C11.7472 3.12194 12.2537 3.12194 12.5661 3.43436C12.8785 3.74678 12.8785 4.25331 12.5661 4.56573L5.93181 11.2L20 11.2C20.4419 11.2 20.8 11.5582 20.8 12C20.8 12.4419 20.4419 12.8 20 12.8L5.93181 12.8L12.5661 19.4344Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  icon_search_regular: (
    // biome-ignore lint/a11y/noSvgWithoutTitle: no title needed
    <svg
      id="icon_search_regular"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-karrot-ui-icon="true"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5002 2.19995C5.91623 2.19995 2.2002 5.91599 2.2002 10.5C2.2002 15.0839 5.91623 18.8 10.5002 18.8C12.5041 18.8 14.3421 18.0898 15.7763 16.9075L20.4345 21.5656C20.7469 21.8781 21.2535 21.8781 21.5659 21.5656C21.8783 21.2532 21.8783 20.7467 21.5659 20.4343L16.9077 15.7761C18.0901 14.3419 18.8002 12.5038 18.8002 10.5C18.8002 5.91599 15.0842 2.19995 10.5002 2.19995ZM3.8002 10.5C3.8002 6.79964 6.79989 3.79995 10.5002 3.79995C14.2005 3.79995 17.2002 6.79964 17.2002 10.5C17.2002 14.2003 14.2005 17.2 10.5002 17.2C6.79989 17.2 3.8002 14.2003 3.8002 10.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  icon_expand_more_regular: (
    // biome-ignore lint/a11y/noSvgWithoutTitle: no title needed
    <svg
      id="icon_expand_more_regular"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-karrot-ui-icon="true"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.93427 7.43427C3.24669 7.12185 3.75322 7.12185 4.06564 7.43427L12 15.3686L19.9343 7.43427C20.2467 7.12185 20.7532 7.12185 21.0656 7.43427C21.3781 7.74669 21.3781 8.25322 21.0656 8.56564L12.5656 17.0656C12.2532 17.3781 11.7467 17.3781 11.4343 17.0656L2.93427 8.56564C2.62185 8.25322 2.62185 7.74669 2.93427 7.43427Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  icon_chevron_right_regular: (
    // biome-ignore lint/a11y/noSvgWithoutTitle: no title needed
    <svg
      id="icon_chevron_right_regular"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-karrot-ui-icon="true"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.42511 3.22988L16.6551 11.4499C16.9551 11.7499 16.9551 12.2399 16.6551 12.5399L8.42511 20.7699C8.12511 21.0699 7.63511 21.0699 7.33511 20.7699C7.03511 20.4699 7.03511 19.9799 7.33511 19.6799L15.0151 11.9999L7.33511 4.31988C7.03511 4.01988 7.03511 3.52988 7.33511 3.22988C7.63511 2.92988 8.12511 2.92988 8.42511 3.22988Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  icon_call_fill: (
    // biome-ignore lint/a11y/noSvgWithoutTitle: no title needed
    <svg
      id="icon_call_fill"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-karrot-ui-icon="true"
    >
      <g>
        <path
          d="M3 6.85714C3 14.668 9.33197 21 17.1429 21C17.9209 21 19.3388 21 20.5463 20.5529C20.8304 20.4476 21 20.1657 21 19.8627V15.3714C21 14.9296 20.6418 14.5714 20.2 14.5714H16.2714C16.0061 14.5714 15.7518 14.6768 15.5642 14.8643L13.9286 16.5C13.2857 16.2857 11.5348 15.6955 10.1068 14.2675C8.32053 12.4813 7.71429 10.7143 7.5 10.0714L9.16461 8.43681C9.35609 8.24878 9.46396 7.99168 9.46396 7.72331V3.8C9.46396 3.35817 9.10579 3 8.66396 3H4.13728C3.83427 3 3.55236 3.16959 3.44713 3.45375C3 4.66116 3 6.07911 3 6.85714Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  icon_close_regular: (
    // biome-ignore lint/a11y/noSvgWithoutTitle: no title needed
    <svg
      id="icon_close_regular"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-karrot-ui-icon="true"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.72633 3.72633C4.0281 3.42456 4.51736 3.42456 4.81913 3.72633L12 10.9072L19.1809 3.72633C19.4826 3.42456 19.9719 3.42456 20.2737 3.72633C20.5754 4.0281 20.5754 4.51736 20.2737 4.81913L13.0928 12L20.2737 19.1809C20.5754 19.4826 20.5754 19.9719 20.2737 20.2737C19.9719 20.5754 19.4826 20.5754 19.1809 20.2737L12 13.0928L4.81913 20.2737C4.51736 20.5754 4.0281 20.5754 3.72633 20.2737C3.42456 19.9719 3.42456 19.4826 3.72633 19.1809L10.9072 12L3.72633 4.81913C3.42456 4.51736 3.42456 4.0281 3.72633 3.72633Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  icon_forward_regular: (
    // biome-ignore lint/a11y/noSvgWithoutTitle: no title needed
    <svg
      id="icon_forward_regular"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-karrot-ui-icon="true"
    >
      <g>
        <path
          d="M11.4344 4.56564C11.1219 4.25322 11.1219 3.74669 11.4344 3.43427C11.7468 3.12185 12.2533 3.12185 12.5657 3.43427L20.5657 11.4343C20.8782 11.7467 20.8782 12.2532 20.5657 12.5656L12.5657 20.5656C12.2533 20.8781 11.7468 20.8781 11.4344 20.5656C11.1219 20.2532 11.1219 19.7467 11.4344 19.4343L18.0687 12.8L4.00044 12.8C3.55861 12.8 3.20044 12.4418 3.20044 12C3.20044 11.5581 3.55861 11.2 4.00044 11.2H18.0687L11.4344 4.56564Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  icon_ios_share_regular: (
    // biome-ignore lint/a11y/noSvgWithoutTitle: no title needed
    <svg
      id="icon_ios_share_regular"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-karrot-ui-icon="true"
    >
      <g>
        <path
          d="M11.434 2.43427C11.7464 2.12185 12.253 2.12185 12.5654 2.43427L16.5654 6.43427C16.8778 6.74669 16.8778 7.25322 16.5654 7.56564C16.253 7.87806 15.7464 7.87806 15.434 7.56564L12.7997 4.93132V14C12.7997 14.4418 12.4415 14.8 11.9997 14.8C11.5579 14.8 11.1997 14.4418 11.1997 14V4.93132L8.56539 7.56564C8.25297 7.87806 7.74644 7.87806 7.43402 7.56564C7.1216 7.25322 7.1216 6.74669 7.43402 6.43427L11.434 2.43427Z"
          fill="currentColor"
        />
        <path
          d="M4.99971 10.8C4.89153 10.8 4.79971 10.8918 4.79971 11V20C4.79971 20.1081 4.89153 20.2 4.99971 20.2H18.9997C19.1079 20.2 19.1997 20.1081 19.1997 20V11C19.1997 10.8918 19.1079 10.8 18.9997 10.8H15.9997C15.5579 10.8 15.1997 10.4418 15.1997 9.99995C15.1997 9.55812 15.5579 9.19995 15.9997 9.19995H18.9997C19.9915 9.19995 20.7997 10.0081 20.7997 11V20C20.7997 20.9918 19.9915 21.7999 18.9997 21.7999H4.99971C4.00788 21.7999 3.19971 20.9918 3.19971 20V11C3.19971 10.0081 4.00788 9.19995 4.99971 9.19995H7.99971C8.44153 9.19995 8.79971 9.55812 8.79971 9.99995C8.79971 10.4418 8.44153 10.8 7.99971 10.8H4.99971Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  icon_chevron_left_fill: (
    // biome-ignore lint/a11y/noSvgWithoutTitle: no title needed
    <svg
      id="icon_chevron_left_fill"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-karrot-ui-icon="true"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.6875 3.27994C17.0575 3.64994 17.0575 4.24994 16.6875 4.61994L9.30752 11.9999L16.6875 19.3799C17.0575 19.7499 17.0575 20.3499 16.6875 20.7199C16.3175 21.0899 15.7175 21.0899 15.3475 20.7199L7.29752 12.6699C6.92752 12.2999 6.92752 11.6999 7.29752 11.3299L15.3475 3.27994C15.7175 2.90994 16.3175 2.90994 16.6875 3.27994Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  icon_chevron_right_fill: (
    // biome-ignore lint/a11y/noSvgWithoutTitle: no title needed
    <svg
      id="icon_chevron_right_fill"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-karrot-ui-icon="true"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.64948 3.27994L16.6995 11.3299C17.0695 11.6999 17.0695 12.2999 16.6995 12.6699L8.64948 20.7199C8.27948 21.0899 7.67948 21.0899 7.30948 20.7199C6.93948 20.3499 6.93948 19.7499 7.30948 19.3799L14.6895 11.9999L7.30948 4.61994C6.93948 4.24994 6.93948 3.64994 7.30948 3.27994C7.67948 2.90994 8.27948 2.90994 8.64948 3.27994Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
};
