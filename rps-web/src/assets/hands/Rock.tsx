import * as React from "react";

const Rock = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="100%"
      height="100%"
      transform="rotate(-25)"
      viewBox="0 0 300 425"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M156.938 3.004c2.647 0 6.939-.5 12.948-1.502C175.823.5 180.114 0 182.761 0c7.296 0 13.448 1.001 18.384 3.004 5.007 2.002 8.798 6.294 11.444 12.945 5.937-5.293 14.593-8.01 25.823-8.01 6.652 0 13.09.858 19.385 2.503 6.295 1.645 10.729 2.86 13.376 3.504 12.59 19.168 18.884 40.695 18.884 64.583 0 11.872-1.287 22.815-3.934 32.756 5.293 19.168 8.941 32.971 10.944 41.196 1.932 8.296 2.933 18.381 2.933 30.324-5.293 15.234-15.522 31.97-30.758 50.136-15.236 18.238-29.471 35.259-42.776 51.208-6.58 2.647-11.23 7.582-13.877 14.877a4038.2 4038.2 0 01-7.939 38.763l2.002 30.754c-9.942 13.947-22.532 23.387-37.768 28.322-15.236 4.935-33.119 7.438-53.648 7.438-12.589 0-27.468-3.933-44.707-11.944-17.239-7.938-27.467-12.23-30.83-12.873l-3.934-5.007V356.17c0-6.294.286-12.802 1.002-19.382 0-13.946-.859-24.674-2.504-32.327-1.645-7.581-6.151-15.377-13.447-23.315-5.938-16.593-10.873-33.758-14.879-51.638C2.003 211.628 0 193.748 0 175.868c0-24.531 4.65-47.06 13.877-67.587 7.94-9.226 15.88-18.88 23.891-28.822C48.355 68.874 59.585 63.58 71.531 63.58c1.287-6.58 4.792-12.73 10.443-18.38 5.58-5.579 10.587-9.727 14.879-12.373 4.291-2.647 9.442-4.005 15.379-4.005h12.947c8.584 0 13.877-3.648 15.88-10.943 2.003-7.223 7.296-12.23 15.879-14.876zm0 5.936c-5.937 2.646-9.728 7.51-11.373 14.447-1.717 6.938-2.503 12.373-2.503 16.378 4.649 36.404 9.227 72.522 13.876 108.282l4.006-3.004 3.934 8.94c2.647.643 7.297 1.001 13.949 1.001 4.649 0 8.297-1.287 10.944-4.005.644-4.577-.358-7.581-3.004-8.94-2.647-1.287-6.295-1.931-10.944-1.931-6.581 0-10.945-1.001-12.876-3.004 3.934-4.005 6.939-6.937 8.941-8.94 13.877-2.646 22.175.644 24.822 9.941l3.934-21.885c-2.647-5.292-6.939-7.939-12.876-7.939-9.299 2.003-15.593 3.004-18.884 3.004-3.29 0-5.937-2.002-7.94-5.936h20.816c-8.584-12.588-15.379-22.886-20.315-30.825-5.007-7.939-7.439-13.231-7.439-15.877 0-4.65 1.43-9.584 4.435-14.948a176.278 176.278 0 019.442-14.876c5.293-5.293 13.233-7.94 23.819-7.94 4.006 0 7.01.358 8.942 1.002V15.95c-1.932-3.361-4.578-5.65-7.94-7.009-3.291-1.287-6.939-1.931-10.944-1.931-2.647 0-6.939.286-12.876.93-5.937.715-9.943 1.001-11.946 1.001zm71.531 5.006c-3.934.644-6.938 2.933-8.941 6.938-2.003 4.005-2.933 8.296-2.933 12.945 6.581 6.58 17.024 13.017 31.259 19.31 14.235 6.294 23.677 11.801 28.326 16.45 0-6.651-.143-13.303-.5-19.883-.358-6.65-1.86-13.445-4.507-20.383-2.647-6.937-6.295-11.228-10.873-12.873-4.649-1.717-11.301-2.504-19.885-2.504h-11.946zm-38.698 15.878c-5.365 1.359-9.156 3.647-11.445 6.937-2.36 3.362-4.506 8.297-6.438 14.948 11.875 10.585 25.823 15.877 41.703 15.877 2.003-1.358 3.648-3.29 4.935-6.007-.643-.644-1.001-1.288-1.001-1.931a99.574 99.574 0 00-6.938 1.93c2.646-3.933 5.293-7.938 7.939-11.872-7.939-9.297-13.519-15.09-16.881-17.379-3.29-2.36-7.296-3.147-11.874-2.503zm-76.538 4.005c-9.299 2.646-16.881 6.08-22.818 10.37-6.009 4.363-9.3 10.156-9.943 17.38 10.587 14.59 17.668 30.968 21.316 49.206 3.648 18.237 5.508 39.264 5.508 63.08l5.937 5.937a554.379 554.379 0 0110.944-20.813c3.935-2.002 7.94-3.004 11.946-3.004 3.934 0 7.582 1.002 10.873 3.004 0-24.531-.787-45.701-2.432-63.581-1.717-17.88-4.149-32.327-7.511-43.198-3.29-10.943-7.082-16.593-11.373-16.95a134.931 134.931 0 01-12.447-1.431zm49.714 20.812c0 9.942 4.077 19.24 12.375 27.822 8.297 8.654 15.236 15.234 20.887 19.882 5.651 4.649 13.09 7.295 22.317 7.939 9.299.644 15.594 3.004 18.885 6.937-2.003 1.359-5.294 2.003-9.943 2.003-5.293 0-8.942.644-10.873 2.003-1.359 2.646-.501 5.793 2.432 9.44 3.004 3.648 6.152 7.081 9.442 10.442-2.003 2.646-4.435 2.932-7.439.93-3.004-1.931-5.436-1.931-7.439 0 0 9.298 1.502 17.737 4.435 25.39 3.004 7.581 7.797 15.376 14.449 23.315-7.296 0-12.947-4.291-16.881-12.945-4.006-8.582-7.01-15.877-8.942-21.814-13.948 0-26.681 5.937-38.269 17.88a3368.833 3368.833 0 00-33.261 34.759c-3.362 5.936-5.008 14.59-5.008 25.819 0 5.292.358 10.442 1.002 15.377.644 5.006 1.359 9.798 2.003 14.447-5.294-3.29-10.301-6.938-14.879-10.943-2.003-5.936-3.004-13.589-3.004-22.815 0-7.295 1.288-12.587 3.934-15.949 0 6.008 1.002 10.299 3.005 12.945 0-5.936 1.001-11.586 3.004-16.878 2.003-5.293 3.934-10.585 5.937-15.878l-23.82-6.007c-1.359 2.646-4.149 4.648-8.44 6.007-4.292 1.288-7.154 2.647-8.441 3.934-11.302 2.002-20.243-2.289-26.824-12.874-6.009-13.946-10.3-23.53-12.947-28.822-3.29-1.359-9.3-2.003-17.883-2.003-10.587.644-18.24 1.001-22.818 1.001-.716 3.934-1.002 9.298-1.002 15.878 0 11.3.644 21.17 2.003 29.824 1.288 8.582 3.29 18.38 5.937 29.323 2.647 10.871 6.152 23.172 10.444 36.69 4.292 13.589 9.585 22.743 15.88 27.32 6.294 4.649 12.446 7.653 18.383 8.94 5.937 1.359 11.588 2.003 16.881 2.003 4.65 0 9.943-.501 15.88-1.502 6.009-1.001 10.301-1.788 12.947-2.432 2.647 0 6.08-1.358 10.444-4.005 4.291-2.646 7.439-3.29 9.442-2.002-2.647 5.292-4.149 11.944-4.507 19.882-.357 7.939-.143 12.588.501 13.875 1.359-7.939 2.504-14.733 3.505-20.311 1.001-5.651 3.791-10.442 8.441-14.448 6.58-1.931 10.586-1.287 11.874 2.003l-5.937 55.643c0 15.877 2.646 28.107 7.94 36.761 5.293.644 10.944-1.144 16.881-5.507 6.008-4.291 10.3-7.438 12.947-9.441-2.647-5.936-4.006-13.517-4.006-22.815 0-4.648.644-11.943 2.003-21.885 1.359-9.87 2.003-17.165 2.003-21.813-7.94-1.359-14.592-2.146-19.886-2.504-5.293-.286-8.583-3.147-9.942-8.439 2.646-1.287 7.439-1.001 14.449 1.001 6.938 2.003 12.017 2.003 15.379 0-10.587 0-18.527-.858-23.891-2.503-5.294-1.645-10.587-6.079-15.88-13.374-.644-2.646-1.002-5.65-1.002-8.94 5.294 3.29 10.587 6.794 15.952 10.442 5.293 3.647 13.233 5.435 23.819 5.435 6.581 0 13.877-1.502 21.817-4.434 8.012-3.004 15.594-6.508 22.89-10.442 3.291-5.292 15.236-19.739 35.766-43.198 20.529-23.53 32.117-43.27 34.764-59.147-.644-2.003-3.649-14.59-8.942-37.763-5.293-23.172-9.943-39.694-13.877-49.635l-8.941 8.94c-2.647 2.003-5.794 3.934-9.442 5.936-3.648 2.003-6.796 3.004-9.442 3.004-2.647 0-5.651-2.002-8.942-5.936 3.935-6.008 7.44-10.299 10.444-12.945 2.933-2.646 6.08-4.291 9.37-4.935l-14.878 17.88c9.943-4.649 16.881-8.44 20.887-11.443 3.934-3.004 5.937-7.796 5.937-14.447L230.472 53.64c-.644.715-2.503 3.862-5.436 9.44-3.005 5.65-6.51 9.155-10.444 10.443-8.655 2.002-17.382 1-26.323-3.004-8.941-3.934-16.381-9.226-22.389-15.878-1.288-8.582 1.001-14.876 6.938-18.88-3.29.714-6.581 7.008-9.871 18.88zM76.467 70.52c-4.65-1.288-9.443-.644-14.378 2.002a526.078 526.078 0 00-14.45 7.94c-1.287 4.648-2.646 9.297-3.934 13.945L40.701 89.4c-5.293 3.362-9.227 6.508-11.874 9.44-2.647 3.005-6.295 8.44-10.944 16.379 3.934 3.361 9.227 5.65 15.88 7.009-2.647-4.005-4.936-8.297-6.939-12.945 12.59 4.005 21.173 12.587 25.823 25.818 4.65 13.232 8.941 25.533 12.875 36.762 4.006 11.3 9.3 16.879 15.951 16.879l1.002-9.942c.644-1.931 2.146-5.078 4.435-9.44 2.289-4.292 6.151-6.437 11.445-6.437 0-9.942-.5-20.884-1.502-32.756-1.002-11.944-4.15-24.818-9.442-38.764L76.466 70.519zm-62.59 52.71l-3.934 25.819 37.697 1.001c.715-8.654-2.933-14.948-10.873-18.881a927.152 927.152 0 01-22.89-7.939zM181.76 134.1l-6.939-1.001 6.939 1.001zm-53.648 28.823c4.005 2.646 7.653 2.646 10.944 0-1.288 0-3.291-.644-5.937-2.003-2.647-1.287-4.292-.643-5.007 2.003zm28.826 2.002v6.938l6.009-3.004c-2.003-1.287-4.006-2.646-6.009-3.934zm-28.826 3.934c-3.291-.644-5.294.858-5.937 4.506-.644 3.647-1.288 5.793-2.003 6.437 2.646 1.358 7.296 2.002 13.948 2.002 3.934 0 7.94-.644 11.874-2.002v-3.934c0-4.649-2.289-7.009-6.938-7.009h-10.944zm-36.696 6.008l-1.001 10.942c5.937 1.288 8.941-2.002 8.941-9.941l-7.94-1.001zm31.76 67.515l-1.001-5.937 1.001 9.942v-4.005zm73.534 68.587l3.934-10.942-3.934 10.942zm-81.474-5.006l-9.943 4.005 9.943-4.005zm68.527 62.58c0-9.226.858-21.527 2.503-36.761 1.645-15.234 2.504-23.816 2.504-25.819-4.006 13.946-6.009 29.18-6.009 45.701 0 7.939.358 13.589 1.002 16.879zm-48.641-60.577c-6.009 19.882-8.942 40.408-8.942 61.578v11.944c1.288 5.293 1.932 9.226 1.932 11.873 4.005-.644 8.297-1.645 12.947-2.933-4.65-7.938-6.939-19.239-6.939-33.829V338.29c0-6.294.286-12.802 1.002-19.382v-10.942zm-92.418 2.002c3.29 21.814 4.935 43.055 4.935 63.582 6.653 1.931 17.454 5.936 32.332 11.872 14.879 6.008 26.681 8.94 35.265 8.94v-80.46c-7.94 4.005-14.735 6.293-20.386 6.937-5.651.715-17.382 2.003-35.265 4.005-4.65 0-7.296-2.789-7.94-8.439-.644-5.65-3.648-7.796-8.941-6.437zm60.586 1.001l-4.935-1.001 4.935 1.001zm91.417 18.81l-3.005 28.823 3.005-28.823zm59.585-251.25l5.007-5.006-5.007 5.006zM118.24 134.1l22.819 1.001c-3.291 4.006-7.94 6.008-13.877 6.008-6.009 0-8.942-2.36-8.942-7.009zm151.002-44.7c0 4.005-3.005 7.939-8.942 11.944-6.008 4.005-9.299 6.294-9.942 6.937-.644-.643-2.647-1.001-6.009-1.001 5.365-1.287 10.301-3.433 14.95-6.437 4.65-3.004 7.94-6.794 9.943-11.443zM71.531 149.048l24.82-4.005c-2.002 2.002-5.793 3.29-11.444 4.005-5.58.644-10.086.644-13.376 0z" />
    </svg>
  );
};

export default Rock;
