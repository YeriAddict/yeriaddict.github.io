import * as React from "react";

import { IconSvgProps } from "@/types";

export const RabbitIcon: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 512 512"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M146.278,198.82c-7.586,0-13.725,6.14-13.725,13.725c0,7.587,6.14,13.726,13.725,13.726 c7.578,0,13.725-6.139,13.725-13.726C160.003,204.959,153.855,198.82,146.278,198.82z"
        fill="currentColor"
      />
      <path
        d="M197.147,119.686c0.886,18.03,33.907-37.134,32.297-61.366C227.817,34.106,195.52,87.389,197.147,119.686z"
        fill="currentColor"
      />
      <path
        d="M47.704,274.96l-0.036-0.108c-0.009-0.018-0.018-0.063-0.027-0.072c0-0.018-0.009-0.018-0.009-0.018 L47.704,274.96z"
        fill="currentColor"
      />
      <path
        d="M91.973,21.61l0.126-0.163c0,0,0.019-0.019,0.037-0.036c0,0,0.008-0.028,0.018-0.036L91.973,21.61z"
        fill="currentColor"
      />
      <path
        d="M376.237,508.98l-0.66,0.417c-0.018,0-0.027,0.027-0.036,0.027L376.237,508.98z"
        fill="currentColor"
      />
      <path
        d="M253.983,4.575c0,0,0,0-0.009,0l0.028,0.018L253.983,4.575z"
        fill="currentColor"
      />
      <path
        d="M443.246,392.214c0.108-2.007,0.362-3.888,0.362-5.995c0.009-18.408-3.916-38.255-13.274-58.816 c-17.912-39.802-47.922-62.199-77.904-76.457l-0.099-0.055l-2.233-1.066l2.017,0.977c-29.865-14.214-60.228-21.872-82.579-32.677 l-0.036-0.028c-14.25-6.988-22.261-16.329-27.578-30.055l-0.018-0.045l-0.036-0.109l-0.154-0.416l-0.063-0.171 c-0.886-2.216-4.919-15.091-4.802-24.287v-0.054v-0.109c-0.008-2.613,0.299-4.945,0.715-6.428l0.018-0.072 c1.375-5.452,6.168-14.169,11.9-24.196l0.018-0.027c5.678-10.172,12.334-22.243,16.113-36.755 c4.539-17.568,6.954-33.238,6.962-46.908c-0.054-11.602-1.609-22.289-6.872-31.62l-0.036-0.063 c-2.712-4.711-6.546-9.078-11.682-12.188c-5.054-3.075-10.796-4.53-16.546-4.566V0.018L237.22,0v0.018 c-0.036,0-0.127,0.009-0.163,0.009V0.018c-0.045,0-0.082,0.009-0.118,0.009c-0.28,0-0.651,0.063-1.292,0.154 c-11.683,0.552-22.532,5.814-33.762,13.816l-0.054,0.036c-13.924,10.154-24.051,23.454-31.628,37.252 c-1.609-3.788-3.12-7.694-5.018-11.112l-0.009-0.018c-5.18-9.25-11.248-17.134-18.427-23.183h-0.009 c-7.016-5.895-15.796-10.389-25.923-10.56V6.366l-0.67-0.019c-11.31,0.009-21.411,6.094-28.01,15.064 c-6.564,8.77-10.634,19.956-13.247,33.834v0.027c-1.14,6.176-1.637,12.351-1.637,18.4v0.046c0.218,29.847,11.284,56.9,19.006,72.57 c-10.209,7.921-24.486,20.787-35.987,38.617l0.561-0.868l-0.57,0.878c-14.675,22.884-20.57,41.23-20.57,57.297 c-0.018,14.313,4.792,25.19,7.948,32.569c5.072,12.279,14.096,20.272,23.174,24.359v0.018c6.447,2.884,12.179,4.521,17.134,6.058 l-0.37,2.496l10.47,1.41c0.778,0.362,1.375,0.642,1.61,0.795l0.018,0.028c3.472,2.169,6.781,4.945,10.461,10.28 c3.644,5.326,7.514,13.31,11.13,25.426l0.019,0.045c3.643,12.27,11.049,32.415,17.595,52.976v0.027 c3.237,10.082,6.221,20.299,8.354,29.232c2.152,8.879,3.39,16.673,3.346,20.815v0.199v0.054l-0.073,1.565 c-3.552,3.825-6.329,8.02-7.866,12.26c-1.953,5.335-2.577,10.551-2.586,15.144l0.01,0.299v-0.064 c0.027,6.474,1.14,12.071,2.233,16.203c0.561,2.062,1.121,3.77,1.555,5.009l0.552,1.456h0.008l0.136,0.406l1.808,4.368l2.649,6.356 h64.36h4.982h153.077l4.087-2.559l0.063-0.044c6.312-4.014,16.438-12.433,27.415-24.621c5.732,2.324,11.98,3.743,18.607,3.743 c28.03-0.009,50.698-22.704,50.707-50.698C472.288,417.532,460.353,400.244,443.246,392.214z M421.6,465.272 c-6.853,0-13.02-2.604-17.939-6.863l-5.216-4.548l-4.178,5.506c-11.41,15.1-23.826,25.408-29.621,29.377H226.162 c0.353-2.053,0.94-4.394,1.971-6.709c2.143-4.693,5.524-9.069,12.776-11.772l-4.412-12.134 c-10.805,3.861-17.126,11.592-20.182,18.699c-1.963,4.466-2.776,8.59-3.147,11.917h-48.265c-0.778-2.812-1.609-6.646-1.591-10.579 c0.036-5.29,1.32-9.801,4.973-12.93l0.985-0.85l-0.968,0.832c2.442-2.116,3.762-4.855,4.512-7.559 c0.76-2.731,1.022-5.588,1.022-8.662c-0.091-14.81-6.103-36.167-12.803-57.379c-6.709-21.059-14.25-41.664-17.451-52.524 c-5.009-16.972-11.175-28.545-18.102-36.872c8.843,1.004,14.512,1.537,14.558,1.537l1.167-12.867 c-0.009,0-4.367-0.406-11.583-1.202c-6.348-0.696-14.937-1.745-24.54-3.066c-5.678-2.523-11.122-3.996-15.751-5.398 c-4.91-1.465-8.952-2.929-12.134-5.1c-3.192-2.206-5.806-5.036-8.156-10.416c-3.218-7.523-6.085-14.35-6.094-23.5 c0-10.19,3.653-24.041,16.899-44.756c8.056-12.605,18.508-22.84,26.917-29.821c4.214-3.499,7.902-6.184,10.525-7.992 c1.302-0.905,2.332-1.574,3.038-2.026l0.778-0.488l0.226-0.136l5.651-3.363l-3.472-5.597l-0.216-0.362 c-2.442-3.888-22.912-39.766-22.785-73.998c0-4.792,0.388-9.548,1.248-14.177c2.152-11.7,5.515-19.603,8.951-24.106 c3.544-4.52,6.474-5.705,9.638-5.777c3.047-0.027,7.052,1.492,11.456,5.172c13.292,10.896,27.108,40.064,28.165,76.25 c-2.387,11.456-3.129,19.168-3.156,19.34l12.858,1.239c0,0,0.099-1.013,0.361-2.992c0.905-6.935,3.807-25.065,10.824-44.359 c6.971-19.322,18.138-39.594,34.594-51.384c9.674-7.026,17.225-9.675,21.692-9.602c2.089,0,3.526,0.442,4.8,1.202 c1.854,1.121,3.69,3.301,5.118,7.352c1.419,4.005,2.279,9.665,2.269,16.637c0.01,10.868-2.026,24.883-6.221,41.067 c-2.839,11.022-8.3,21.303-13.888,31.203c-5.551,9.928-11.275,19.404-14.087,29.548c-1.121,4.132-1.528,8.391-1.528,12.568 c0.063,16.737,6.366,32.777,6.564,33.392h-0.009c6.908,18.599,19.982,33.662,39.332,42.858 c25.643,12.198,55.679,19.711,82.886,32.812c27.216,13.147,51.394,31.294,66.783,65.101c8.047,17.74,11.184,34.115,11.194,49.205 c0,5.878-0.489,11.556-1.356,17.053l-1.066,6.673l6.726,0.76c13.734,1.537,24.413,13.029,24.404,27.116 C449.033,452.966,436.772,465.245,421.6,465.272z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 28,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const LinkedInIcon: React.FC<IconSvgProps> = ({
  size = 28,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none">
        <path d="M0,192v-192h192v192z" fill="none" />
        <g fill="currentColor">
          <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z" />
        </g>
      </g>
    </svg>
  );
};

export const WebsiteIcon: React.FC<IconSvgProps> = ({
  size = 28,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      width={size || width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 7a1 1 0 00-1 1v8a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1h-4zm3 2h-2v6h2V9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6 7a1 1 0 000 2h4a1 1 0 100-2H6zM6 11a1 1 0 100 2h4a1 1 0 100-2H6zM5 16a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 3a3 3 0 00-3 3v12a3 3 0 003 3h16a3 3 0 003-3V6a3 3 0 00-3-3H4zm16 2H4a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};


export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => {

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <g fill="currentColor">
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  );
};
