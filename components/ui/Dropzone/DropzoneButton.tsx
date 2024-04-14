import { useRef } from "react";
import { Text, Group, Button, rem, useMantineTheme } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";
import classes from "./DropzoneButton.module.css";

export function DropzoneButton() {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);

  return (
    <div className={` ${classes.wrapper}  p-2 gap-4 h-full flex flex-col items-center`}>
      <Dropzone
        openRef={openRef}
        onDrop={() => {}}
        className={classes.dropzone}
        radius="md"
        accept={[MIME_TYPES.pdf, MIME_TYPES.jpeg, MIME_TYPES.png]}
        maxSize={10 * 1024 ** 2}
      >
        <div style={{ pointerEvents: "none" }}>
          <Group justify="center">
            <Dropzone.Accept>
              <IconDownload
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload style={{ width: rem(50), height: rem(50) }} stroke={1.5} />
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
            <Dropzone.Idle>Upload Prescription</Dropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
            Drag&apos;n&apos;drop files here to upload. We can accept only <i>images and pdf </i>{" "}
            files that are less than 10mb in size.
          </Text>
        </div>
      </Dropzone>

      <Button
        // className={`absolute left-1/2 -translate-x-1/2  `}
        size="md"
        radius="xl"
        // className="bottom-6 absolute left-1/2 -translate-x-1/2"
        onClick={() => openRef.current?.()}
      >
        Select files
      </Button>
    </div>
  );
}
