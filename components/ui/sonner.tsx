"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white dark:group-[.toaster]:bg-[#0e0f0c] group-[.toaster]:text-[#0e0f0c] dark:group-[.toaster]:text-white group-[.toaster]:border group-[.toaster]:border-black/5 dark:group-[.toaster]:border-white/10 group-[.toaster]:shadow-md group-[.toaster]:rounded-[24px] group-[.toaster]:px-4 group-[.toaster]:py-3 group-[.toaster]:text-[14px] group-[.toaster]:leading-[20px] group-[.toaster]:font-sans",
          description: "group-[.toast]:text-[#868685]",
          actionButton:
            "group-[.toast]:bg-[#9fe870] group-[.toast]:text-[#0e0f0c]",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      icons={{
        success: <CircleCheckIcon className="size-4 text-[#2ead4b]" />,
        info: <InfoIcon className="size-4 text-[#38c8ff]" />,
        warning: <TriangleAlertIcon className="size-4 text-[#ffd11a]" />,
        error: <OctagonXIcon className="size-4 text-[#d03238]" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      {...props}
    />
  )
}

export { Toaster }
