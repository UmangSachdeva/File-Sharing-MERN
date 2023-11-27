export const uploadCloud = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56"
        fill="none"
        stroke={props.color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <path
        fill="none"
        stroke={props.color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M320 255.79l-64-64-64 64M256 448.21V207.79"
      />
    </svg>
  );
};

export const copyIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <rect
        x="128"
        y="128"
        width="336"
        height="336"
        rx="57"
        ry="57"
        fill="none"
        stroke={props.color}
        stroke-linejoin="round"
        stroke-width="32"
      />
      <path
        d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24"
        fill="none"
        stroke={props.color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
    </svg>
  );
};
