import React from "react";

import "./App.css";

import { Slider } from "radix-ui";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  Cross2Icon,
  DotsHorizontalIcon,
  DrawingPinFilledIcon,
  DrawingPinIcon,
  OpenInNewWindowIcon,
  PlusIcon,
  Share2Icon,
} from "@radix-ui/react-icons";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  DropdownMenu,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Separator,
  Strong,
  Switch,
  Text,
  TextField,
  Theme,
} from "@radix-ui/themes";
import { X } from "lucide-react";

const App = () => {
  return (
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="50%">
      <div className="app">
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :)</Text>
          <Button>Let's go</Button>
          <Button variant="soft">
            Get started <ArrowRightIcon />
          </Button>
          <Slider.Root
            className="SliderRoot"
            defaultValue={[50]}
            max={100}
            step={1}
          >
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" aria-label="Volume" />
          </Slider.Root>
          <Box height="100px">123</Box>
          <Box height={{ md: "20vh", xl: "600px" }}>456</Box>
          <Flex gap="3" align="center">
            <Button size="1" variant="soft">
              Edit profile
            </Button>
            <Button size="2" variant="soft">
              Edit profile
            </Button>
            <Button size="3" variant="soft">
              Edit profile
            </Button>
          </Flex>
          <X className="h-4 w-4" />
        </Flex>
      </div>
    </Theme>
  );
};

export default App;
