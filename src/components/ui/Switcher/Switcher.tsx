import styled from "styled-components";
import React, { FC, InputHTMLAttributes } from "react";
import { observer } from "mobx-react";

interface SwitcherProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  className?: string;
}

const Switcher: FC<SwitcherProps> = observer(({ onChange, checked, className, ...rest }) => {
  return (
    <Root className={className}>
      <Input type="checkbox" onChange={onChange} checked={checked} {...rest} />
      <Slider className="slider"></Slider>
    </Root>
  );
});

export default Switcher;

const Root = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Input = styled.input`
  display: none;

  &:checked + .slider {
    background-color: #2196f3;
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + .slider:before {
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
