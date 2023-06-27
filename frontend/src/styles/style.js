const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs-text-[48px] text-[40px] text-gray xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-nomal text-gray text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 px-6",
  padding: "sm:px-16 px-6 sm:py-12 px-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6"
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
}

export default styles;