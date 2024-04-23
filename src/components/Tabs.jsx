/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
