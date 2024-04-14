import { Button, Divider, NumberInput, Textarea } from "@mantine/core";
import React, { FormEvent } from "react";
import { DropzoneButton } from "./ui/Dropzone/DropzoneButton";
import { IconArrowRight } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";

const Form = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");

    notifications.show({
      title: "Submitted 🚀",
      message: "We will get back to you soon",
      color: "teal",
    });
  };
  return (
    <form className=" flex flex-col gap-y-2" onSubmit={onSubmit}>
      <div className="border-dashed border p-2">
        <DropzoneButton />

        <Divider
          my="xs"
          size="xs"
          label="or"
          labelPosition="center"
          classNames={{
            label: "text-lg",
          }}
        />
        <Textarea
          size="md"
          label="Write the medicine names"
          placeholder="eg. Medicine Name : number of plates "
          autosize
          minRows={2}
          maxRows={6}
        />
      </div>
      <div className="px-2 gap-y-2 flex flex-col">
        <Textarea
          size="md"
          label="Address to be delivered to"
          withAsterisk
          placeholder="Enter your address here"
        />
        <NumberInput
          label="Mobile number"
          placeholder="eg. 8759868456"
          hideControls
          maxLength={10}
          minLength={10}
          required
          withAsterisk
        />

        <Button
          loading={false}
          disabled={false}
          loaderProps={{ type: "dots" }}
          rightSection={<IconArrowRight size={14} />}
          classNames={{
            root: "w-full ",
          }}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};



export default Form;
