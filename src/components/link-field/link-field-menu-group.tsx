"use client";

import type { LinkFieldItem } from "@/types";

import { Dispatch, SetStateAction, useState } from "react";
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

const changeTitleFormSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "List title must be at least 3 characters.",
    })
    .max(18, {
      message: "List title must be at most 18 characters.",
    }),
});

const addLinkFormSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
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

  const form = useForm<z.infer<typeof addLinkFormSchema>>({
    resolver: zodResolver(addLinkFormSchema),
    defaultValues: {
      title: "",
      href: "",
      starred: false,
      external: false,
    },
  });

  async function onSubmit(values: z.infer<typeof addLinkFormSchema>) {
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

export function ChangeTitleComponent({
  title,
  changeTitle,
  open,
  setOpen,
}: {
  title: string;
  changeTitle: (title: string) => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const form = useForm<z.infer<typeof changeTitleFormSchema>>({
    resolver: zodResolver(changeTitleFormSchema),
    defaultValues: {
      title: title,
    },
  });

  function onSubmit(values: z.infer<typeof changeTitleFormSchema>) {
    changeTitle(values.title);
    setOpen(false);
    toast("List title has been updated.", {
      description: new Date().toLocaleString(),
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Change title</DialogTitle>
          <DialogDescription>
            Change title for selected link field
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="My custom list..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Save</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export function OtherOptionsMenu({
  title,
  resetList,
  removeList,
  changeTitle,
}: {
  title: string;
  resetList: () => void;
  removeList: () => void;
  changeTitle: (title: string) => void;
}) {
  const [openChangeTitle, setOpenChangeTitle] = useState(false);

  return (
    <>
      <ChangeTitleComponent
        title={title}
        changeTitle={changeTitle}
        open={openChangeTitle}
        setOpen={setOpenChangeTitle}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={resetList}>Reset List</DropdownMenuItem>
            <DropdownMenuItem onClick={removeList}>
              Remove List
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenChangeTitle(true)}>
              Change Title
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export function LinkFieldMenuGroup({
  addItem,
  title,
  resetList,
  changeTitle,
  removeList,
}: {
  addItem: (item: LinkFieldItem) => void;
  title: string;
  resetList: () => void;
  changeTitle: (title: string) => void;
  removeList: () => void;
}) {
  return (
    <ButtonGroup aria-label="List controls" className="h-fit">
      <OtherOptionsMenu
        title={title}
        resetList={resetList}
        removeList={removeList}
        changeTitle={changeTitle}
      />
      <AddLinkComponent addItem={addItem} />
    </ButtonGroup>
  );
}
