"use client"

import { useState, useEffect } from "react"
import { AlertTriangle, Check, Clock, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"








  const formatTimeRemaining = (expiresAt: string | null) => {
    if (!expiresAt) return "expired"
    const now = new Date()
    const expiry = new Date(expiresAt)
    const diff = expiry.getTime() - now.getTime()

    if (diff <= 0) return "expired"

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    if (days > 0) {
      return `${days} day${days !== 1 ? "s" : ""}, ${hours} hour${hours !== 1 ? "s" : ""}`
    }
    return `${hours} hour${hours !== 1 ? "s" : ""}`
  }

