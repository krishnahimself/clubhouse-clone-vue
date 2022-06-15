import { HMSReactiveStore } from "@100mslive/hms-video-store";

const hmsManager = new HMSReactiveStore();

export function useHMSActions() {
    const hmsActions = hmsManager.getActions();

    return hmsActions;
}
