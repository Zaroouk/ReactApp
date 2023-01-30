import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Button,
  Input,
} from "@chakra-ui/react";

function FieldComponent({
  onChange,
  value,
  label,
  placeholder,
  type,
  useHelper,
  helperText,
  isPassword,
}) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div style={{ marginTop: "20px" }}>
      {useHelper ? (
        <FormControl>
          <FormLabel>{label}</FormLabel>
          <Input
            value={value}
            onChange={onChange}
            width={"full"}
            type={type}
            placeholder={placeholder}
          />
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      ) : isPassword ? (
        <FormControl>
          <FormLabel>{label}</FormLabel>
          <InputGroup size="md">
            <Input
              value={value}
              onChange={onChange}
              type={show ? "text" : "password"}
              placeholder={placeholder}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      ) : (
        <FormControl>
          <FormLabel>{label}</FormLabel>
          <Input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
          />
        </FormControl>
      )}
    </div>
  );
}

export default FieldComponent;
