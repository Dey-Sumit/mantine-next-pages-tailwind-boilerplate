import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Modal,
} from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconArrowRight,
  IconBrandWhatsapp,
  IconPhoneOutgoing,
  IconMedicineSyrup,
} from "@tabler/icons-react";
import classes from "./Header.module.css";
import { DropzoneButton } from "@/components/ui/Dropzone/DropzoneButton";
import Form from "@/components/Form";
import { notifications } from "@mantine/notifications";
import { LanguagePicker } from "@/components/ui/LanguagePicker/LanguagePicker";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const [opened, { open, close }] = useDisclosure(false);

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <>
      <Box className="py-4">
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            {/* <MantineLogo size={30} color="green" /> */}
            <div className="flex space-x-2 items-center ">
              <IconMedicineSyrup size={40} color={theme.colors.green[6]} />
              {/* <span className="whitespace-pre-wrap font-semibold text-lg text-green-700">
                Express {"\n"}
                medicines
              </span> */}
              {/* <LanguagePicker /> */}
            </div>

            <Group h="100%" gap={0} visibleFrom="sm">
              <a href="#" className={classes.link}>
                Home
              </a>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Offers
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.green[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor href="#" fz="xs">
                      Health Blogs
                    </Anchor>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" c="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">Learn more on whatsapp</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="#" className={classes.link}>
                Partners
              </a>
              <a href="#" className={classes.link}>
                Health Blogs
              </a>
            </Group>

            <Group visibleFrom="sm">
              <Button
                onClick={open}
                radius="xl"
                size="sm"
                className="flex-1 sm:flex-initial"
                rightSection={<IconArrowRight size={20} />}
              >
                Order Now
              </Button>
              <Button
                variant="outline"
                radius="xl"
                size="sm"
                className="flex-1 sm:flex-initial"
                rightSection={<IconBrandWhatsapp size={20} className="mr-2" />}
              >
                Whatsapp Us
              </Button>
              <Button
                variant="light"
                radius="xl"
                size="sm"
                className="flex-1 sm:flex-initial"
                rightSection={<IconPhoneOutgoing size={20} className="mr-2" />}
              >
                Call us
              </Button>
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />

            <a href="#" className={classes.link}>
              Home
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>

            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default" onClick={open}>
                Order Now
              </Button>
              <Button onClick={open}>Call us</Button>
              <Button>Whatsapp us</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
      <Modal
        opened={opened}
        onClose={close}
        title="🇮🇳  Order now to get upto 25% off  ✅"
        centered
        size="lg"
        classNames={{
          title: "text-base rounded-sm text-orange-400 w-full font-semibold bg-gray-100 px-2 py-1",
        }}
      >
        <Form />
      </Modal>
    </>
  );
}
