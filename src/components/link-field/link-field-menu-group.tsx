"use client";

import type { LinkFieldItem } from "@/types";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Plus, MoreHorizontalIcon } from "lucide-react";

import { ButtonGroup } from "@/components/ui/button-group";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  href: z.string().url({
    message: "Please enter a valid URL",
  }),
  starred: z.boolean().optional(),
  external: z.boolean().optional(),
});

export function AddLinkComponent({
  addItem,
}: {
  addItem: (item: LinkFieldItem) => void;
}) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      href: "",
      starred: false,
      external: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    addItem(values);
    setOpen(false);
    toast("Item has been added to the list.", {
      description: new Date().toLocaleString(),
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Link</DialogTitle>
          <DialogDescription>
            The link will be added to the current list.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="href"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link</FormLabel>
                  <FormControl>
                    <Input placeholder="http://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export function OtherOptionsMenu({ resetList }: { resetList: () => void }) {
  const removeList = () => {
    console.log("Remove List");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <MoreHorizontalIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={resetList}>
            Reset List
          </DropdownMenuItem>
          <DropdownMenuItem disabled onClick={() => removeList()}>
            Remove List
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function LinkFieldMenuGroup({
  addItem,
  resetList,
}: {
  addItem: (item: LinkFieldItem) => void;
  resetList: () => void;
}) {
  return (
    <ButtonGroup aria-label="List controls" className="h-fit">
      <OtherOptionsMenu resetList={resetList} />
      <AddLinkComponent addItem={addItem} />
    </ButtonGroup>
  );
}
