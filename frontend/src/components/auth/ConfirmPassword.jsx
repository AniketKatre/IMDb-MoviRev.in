import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import Submit from "../form/Submit";
import { CustomLink } from "../CustomLink";
import FormContainer from "../form/FormContainer";
import { commonModalClasses } from "../../utils/theme";

const ConfirmPassword = () => {
  return (
    <>
      <FormContainer>
        <Container>
          <form className={commonModalClasses + " w-80"}>
            <Title>Enter New Password</Title>

            <FormInput
              label="New Password"
              placeholder="********"
              name="password"
              type="password"
            />

            <FormInput
              label="Confirm Password"
              placeholder="********"
              name="confirmPassword"
              type="password"
            />

            <Submit value="Confirm Password" />
          </form>
        </Container>
      </FormContainer>
      ;
    </>
  );
};

export default ConfirmPassword;
