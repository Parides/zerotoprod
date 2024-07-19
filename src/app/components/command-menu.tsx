import * as React from "react";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  HomeIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "~/components/ui/command";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const auth = useAuth();

  React.useEffect(() => {
    console.log("mounted");
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    const profile = (e: KeyboardEvent) => {
      if (e.key === "p" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push(`/user/${auth.userId}`);
      }
    };
    const home = (e: KeyboardEvent) => {
      if (e.key === "h" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        router.push(`/`);
      }
    };

    document.addEventListener("keydown", down);
    document.addEventListener("keydown", profile);
    document.addEventListener("keydown", home);
    return () => {
      document.removeEventListener("keydown", down);
      document.removeEventListener("keydown", profile);
      document.removeEventListener("keydown", home);
    };
  }, []);

  return (
    <div className="w-full md:max-w-md">
      <Command>
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          className="inline-flex w-full justify-between bg-muted/5 p-2"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg> */}
          <span className="hidden lg:inline-flex">Search documentation...</span>
          <span className="inline-flex lg:hidden">Search...</span>
          <kbd className="pointer-events-none inline-flex select-none items-center justify-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  router.push(`/user/${auth.userId}`);
                }}
              >
                <PersonIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘p</CommandShortcut>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  setOpen(false);
                  router.push(`/`);
                }}
              >
                <HomeIcon className="mr-2 h-4 w-4" />
                <span>Home</span>
                <CommandShortcut>⌘h</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </CommandDialog>
      </Command>
    </div>
  );
}
