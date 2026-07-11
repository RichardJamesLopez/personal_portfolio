"use client"

import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useReducedMotion, type PanInfo } from "framer-motion"
import { projects, type Project } from "../data/projects"

const visibleCardCount = 5

function getStackStyle(index: number, prefersReducedMotion: boolean, isCompact: boolean) {
  const xScale = isCompact ? 0.65 : 1
  const yScale = isCompact ? 0.75 : 1

  if (index === 0) {
    return { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 }
  }

  if (index === 1) {
    return { x: 32 * xScale, y: -12 * yScale, scale: 0.9, rotate: 2, opacity: 1 }
  }

  if (index === 2) {
    return { x: 48 * xScale, y: 0, scale: 0.85, rotate: 4, opacity: 1 }
  }

  if (index < visibleCardCount) {
    return {
      x: Math.min(62 + (index - 3) * 12, 82) * xScale,
      y: (12 + (index - 3) * 8) * yScale,
      scale: Math.max(0.8 - (index - 3) * 0.02, 0.78),
      rotate: Math.min(7 + (index - 3) * 2, 10),
      opacity: 1,
    }
  }

  return {
    x: prefersReducedMotion ? 0 : 84 * xScale,
    y: prefersReducedMotion ? 0 : 22 * yScale,
    scale: 0.76,
    rotate: prefersReducedMotion ? 0 : 10,
    opacity: 0,
  }
}

function openProject(project: Project) {
  const opened = window.open(project.link, "_blank", "noopener,noreferrer")

  if (opened) {
    opened.opener = null
  }
}

export default function HeroCardStack() {
  const prefersReducedMotion = useReducedMotion()
  const projectIds = useMemo(() => projects.map((project) => project.id), [])
  const [order, setOrder] = useState(projectIds)
  const [isCompact, setIsCompact] = useState(false)
  const ignoreClickRef = useRef(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)")
    const updateCompactMode = () => setIsCompact(mediaQuery.matches)

    updateCompactMode()
    mediaQuery.addEventListener("change", updateCompactMode)

    return () => mediaQuery.removeEventListener("change", updateCompactMode)
  }, [])

  useEffect(() => {
    setOrder((currentOrder) => {
      const currentIds = new Set(currentOrder)
      const addedIds = projectIds.filter((id) => !currentIds.has(id))
      const validCurrentIds = currentOrder.filter((id) => projectIds.includes(id))

      return [...validCurrentIds, ...addedIds]
    })
  }, [projectIds])

  const orderedProjects = order
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project))

  const activeProject = orderedProjects[0]

  const cycleNext = () => {
    setOrder((currentOrder) => {
      if (currentOrder.length < 2) return currentOrder
      const [firstProject, ...restProjects] = currentOrder
      return [...restProjects, firstProject]
    })
  }

  const cyclePrevious = () => {
    setOrder((currentOrder) => {
      if (currentOrder.length < 2) return currentOrder
      const lastProject = currentOrder[currentOrder.length - 1]
      return [lastProject, ...currentOrder.slice(0, -1)]
    })
  }

  const bringToFront = (projectId: number) => {
    setOrder((currentOrder) => [projectId, ...currentOrder.filter((id) => id !== projectId)])
  }

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const shouldCycle = Math.abs(info.offset.x) > 90 || Math.abs(info.offset.y) > 70

    if (shouldCycle) {
      cycleNext()
    }

    window.setTimeout(() => {
      ignoreClickRef.current = false
    }, 0)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault()
      cycleNext()
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault()
      cyclePrevious()
    }

    if (event.key === "Enter" && activeProject) {
      event.preventDefault()
      openProject(activeProject)
    }
  }

  if (orderedProjects.length === 0) {
    return null
  }

  return (
    <div
      className="relative mx-auto flex w-full max-w-[320px] flex-col items-center outline-none sm:max-w-[430px]"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Featured project stack"
    >
      <div className="relative h-[330px] w-[220px] sm:h-[484px] sm:w-[323px]">
        {orderedProjects.map((project, index) => {
          const isFrontCard = index === 0
          const isVisibleCard = index < visibleCardCount
          const stackStyle = getStackStyle(index, Boolean(prefersReducedMotion), isCompact)

          return (
            <motion.div
              key={project.id}
              className={`absolute inset-0 overflow-hidden rounded-[24px] bg-white shadow-[0_35px_14px_rgba(0,0,0,0.01),0_20px_12px_rgba(0,0,0,0.05),0_9px_9px_rgba(0,0,0,0.09),0_2px_5px_rgba(0,0,0,0.10)] ${
                isFrontCard ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
              }`}
              style={{
                zIndex: orderedProjects.length - index,
                pointerEvents: isVisibleCard ? "auto" : "none",
              }}
              animate={stackStyle}
              transition={
                prefersReducedMotion
                  ? { duration: 0.01 }
                  : { type: "spring", stiffness: 280, damping: 28, mass: 0.8 }
              }
              drag={isFrontCard && !prefersReducedMotion}
              dragElastic={0.18}
              dragMomentum={false}
              onDragStart={() => {
                ignoreClickRef.current = true
              }}
              onDragEnd={handleDragEnd}
              onClick={() => {
                if (ignoreClickRef.current) return

                if (isFrontCard) {
                  openProject(project)
                } else {
                  bringToFront(project.id)
                }
              }}
              aria-hidden={!isVisibleCard}
            >
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                fill
                sizes="(min-width: 640px) 323px, 220px"
                className="object-cover"
                priority={isFrontCard}
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-start justify-end gap-2 p-4 sm:p-5">
                <div className="max-w-[calc(100%-8px)] rounded-full bg-black/45 px-3 py-2 text-xs font-medium leading-5 text-white shadow-sm backdrop-blur-md sm:px-4 sm:text-sm">
                  <span>{project.title}</span>
                  <span className="mx-2 text-white/50">/</span>
                  <span className="text-white/80">{project.category}</span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={cyclePrevious}
          aria-label="Previous project"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={cycleNext}
          aria-label="Next project"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
