import { Text, SimpleGrid, Container, rem, Title, useMantineTheme } from "@mantine/core";
import { IconTruck, IconCertificate, IconCoin } from "@tabler/icons-react";
import classes from "./Features.module.css";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  const theme = useMantineTheme();
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon
          style={{ width: rem(38), height: rem(38) }}
          className={classes.icon}
          stroke={1.5}
          color={theme.colors.green[6]}
        />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconCertificate,
    title: "সুবিধাজনক অনলাইন অর্ডার ",
    description:
      "আপনার বাড়ি থেকে সহজেই প্রেসক্রিপশনের   ছবি আপলোড অথবা, ওষুধের নাম লিখে অথবা আমাদের সরাসরি কল করে অর্ডার দিতে পারেন",
  },
  {
    icon: IconTruck,
    title: "দ্রুত এবং নির্ভরযোগ্য ডেলিভারি ",
    description:
      " আমাদের দক্ষ শিপিং কোম্পানিগুলোর সাথে আপনি দোরগোড়ায় ওষুধের ডেলিভারি উপভোগ করুন।",
  },
  {
    icon: IconCoin,
    title: "Very Affordable Pricing",
    description:
      "Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.",
  },
];

export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        আমাদের ওয়েবসাইট থেকে কেন অর্ডার করবেন?
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
