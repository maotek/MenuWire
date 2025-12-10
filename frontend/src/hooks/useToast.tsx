import React, { useState, useCallback, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface ToastProps {
    message: string;
    onClose: () => void;
    duration?: number;
}

const Toast = ({
    message,
    onClose,
    duration = 2500,
}: ToastProps) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const exitTimer = setTimeout(() => {
            setIsExiting(true);
        }, duration);

        return () => {
            clearTimeout(exitTimer);
        };
    }, [duration]);

    useEffect(() => {
        if (isExiting) {
            const closeTimer = setTimeout(() => {
                onClose();
            }, 500); // Must match the animation duration in globals.css

            return () => {
                clearTimeout(closeTimer);
            };
        }
    }, [isExiting, onClose]);

    return (
        <div
            className={`fixed top-2 left-1/2 min-w-max -translate-x-1/2 bg-green-600 text-white py-3 px-5 rounded-lg shadow-xl z-100 flex items-center gap-3 ${isExiting ? 'animate-fade-out-up' : 'animate-fade-in-down'
                }`}
        >
            <CheckCircle size={20} />
            <span className="font-semibold">{message}</span>
        </div>
    );
};

interface UseToastReturn {
    showToast: (message: string, duration?: number) => void;
    hideToast: () => void;
    ToastComponent: () => React.ReactNode | null;
}

export const useToast = (): UseToastReturn => {
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [duration, setDuration] = useState<number | undefined>(undefined);

    const showToast = useCallback((msg: string, dur?: number) => {
        setMessage(msg);
        setDuration(dur);
        setIsVisible(true);
    }, []);

    const hideToast = useCallback(() => {
        setIsVisible(false);
    }, []);

    const ToastComponent = useCallback(() => {
        if (!isVisible) return null;

        return (
            <Toast
                message={message}
                onClose={hideToast}
                duration={duration}
            />
        );
    }, [isVisible, message, duration, hideToast]);

    return { showToast, hideToast, ToastComponent };
};
