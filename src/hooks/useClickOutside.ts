import { useCallback, useEffect, type RefObject } from "react";

interface Props {
    ref: RefObject<HTMLElement | null>;
    handler: () => void;
    capture?: boolean;
    events?: Array<keyof DocumentEventMap>;
}

export function useClickOutside({
    ref,
    handler,
    capture = false,
    events = ["mousedown", "touchstart"],
}: Props) {
    const handleClickOutside = useCallback(
        (event: MouseEvent | TouchEvent) => {
            const target = event.target as Node;
            const element = ref.current;

            if (!element || !target) return;

            if (!element.contains(target)) handler();
        },
        [ref, handler]
    ) as EventListener;

    useEffect(() => {
        for (const event of events) {
            document.addEventListener(event, handleClickOutside, capture);
        }

        return () => {
            for (const event of events) {
                document.removeEventListener(event, handleClickOutside, capture);
            }
        };
    }, [events, handleClickOutside, capture]);
} 