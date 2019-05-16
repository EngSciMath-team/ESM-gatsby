// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const JoinUs = () => {
  const StyledInput = styled.input`
    padding: 14px 12px;
    margin-right: 12px;
    border-radius: 4px;
    width: 330px;
    color: #fff;
    font-family: Roboto;
    font-size: 15px;
    background-color: #4d4d4d;
    color: #282828;
    outline: none;
    box-shadow: 0px 4px 20px 0px transparent;
    -webkit-appearance: none;
    border: 1px solid #878787;
    outline: none;
    color: white !important;
    display: flex;

    ::placeholder {
      font-family: Roboto !important;
      color: white !important;
    }

    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: white !important;
      opacity: 1;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: pink;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      color: pink;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      color: pink;
    }
  `;

  const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
  `;

  const JoinUsWrapper = styled.div`
    background: #212121;
  `;

  const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `;

  const StyledH3 = styled.h3`
    margin: 0;
    color: white;
    font-size: 29px;
    font-family: Raleway;
    font-weight: 700;
    margin-right: 15px;
  `;

  return (
    <JoinUsWrapper>
      <Formik
        initialValues={{ email: "", blurb: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Required")
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          } = props;
          return (
            <StyledForm onSubmit={handleSubmit}>
              <StyledH3>Join us:</StyledH3>
              <InputWrapper>
                <StyledInput
                  id="email"
                  placeholder="Your email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email ? "text-input error" : "text-input"}
                />

                <StyledInput
                  id="blurb"
                  placeholder="Your field of study / interest / profession"
                  type="text"
                  value={values.blurb}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="text-input-blurb"
                />
              </InputWrapper>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </StyledForm>
          );
        }}
      </Formik>
    </JoinUsWrapper>
  );
};
export default JoinUs;
