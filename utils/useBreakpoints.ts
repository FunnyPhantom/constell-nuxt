import { ref, onMounted, onUnmounted } from "vue";

export default function useBreakpoints() {
  const breakpointState = useState<"s" | "m" | "l">("breakpoint", () => "l");
  const mounted = useState<boolean>("mounted", () => false);

  const updateBreakpoint = () => {
    const width = window.innerWidth;
    if (width < 576) {
      breakpointState.value = "s";
    } else if (width < 768) {
      breakpointState.value = "m";
    } else {
      breakpointState.value = "l";
    }
  };

  onMounted(() => {
    if (typeof window !== "undefined") {
      updateBreakpoint();
      if (!mounted.value) {
        window.addEventListener("resize", updateBreakpoint);
        mounted.value = true;
      }
    }
  });

  onUnmounted(() => {
    if (typeof window !== "undefined") {
      if (mounted.value) {
        window.removeEventListener("resize", updateBreakpoint);
        mounted.value = false;
      }
    }
  });

  return breakpointState;
}
