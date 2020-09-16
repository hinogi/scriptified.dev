import React from 'react';

const TechTalks = ({ color = '' }: { color: string }): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={color}
    >
      <path d="M13.077 6.099c.336-.137.683-.156 1.001-.081.681.162 1.232.748 1.278 1.519-.226-.276-.524-.456-.85-.533-.328-.078-.686-.051-1.024.087-.674.275-1.093.915-1.027 1.629-.743-.852-.432-2.19.622-2.621zm.521 9.834c.658.41 2.729 1.548 4.845 4.067 1.912-.781 3.742-1.528 5.558-2.268-.823-2.021-.198-3.151-1.018-5.159-.56-1.37-1.034-1.502-1.943-1.549l.287.708c.175.426-.47.686-.642.262l-.258-.63c-.209-.515-.881-.383-1.469-.387l.35.857c.173.424-.469.688-.643.262l-.303-.744c-.215-.526-.915-.374-1.508-.364l.37.908c.175.428-.471.686-.643.263l-1.503-3.677c-.467-1.144-2.238-.466-1.756.717l2.217 5.434c-.324-.215-.922-.482-1.33-.578-1.263-.298-2.075.969-.611 1.878zm-5.858-5.311l-2.74 2.669.705.709 2.033-1.965 1.496 1.497 2.656-2.672-.422-1-2.228 2.264-1.5-1.502zm-4.658 13.378h2.628l3.42-4h-2.633l-3.415 4zm9.773-4l3.42 4h2.628l-3.415-4h-2.633zm-2.855 4h2v-4h-2v4zm3.141-6c-.902-.564-1.617-.94-2.076-2h-8.065v-13h16v6h2v-6h1v-3h-22v3h1v15h12.141z" />{' '}
    </svg>
  );
};

export default TechTalks;
