import { RowsIcon } from "@radix-ui/react-icons";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "~/components/ui/sheet";

export default function SideNav() {
  return (
    <div className="flex md:hidden">
    {/* <div className=""> */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <RowsIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
