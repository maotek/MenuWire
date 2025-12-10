import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState, useCallback } from 'react';

    interface UseConfirmReturn {
        showConfirm: (msg: string, confirmCallback: () => void) => void;
        ConfirmComponent: () => React.ReactNode | null;
    }

    export const useConfirm = (): UseConfirmReturn => {
        const [showConfirmation, setShowConfirmation] = useState(false);
        const [message, setMessage] = useState('');
        const [callbackref, setCallbackRef] = useState<() => void>(() => {});

        const showConfirm = useCallback((msg: string, confirmCallback: () => void) => {
            setMessage(msg);
            setShowConfirmation(true);
            setCallbackRef(confirmCallback);
        }, []);

        const cancel = useCallback(() => {
            setShowConfirmation(false);
        }, []);

        const confirm = useCallback(() => {
            setShowConfirmation(false);
            callbackref();
        }, [callbackref]);

        const ConfirmComponent = useCallback(() => {
            if (!showConfirmation) return null;
            return (
                <div className="fixed h-full inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <Card className="w-full max-w-md mx-4 shadow-lg animate-in zoom-in-95 duration-200 border-[rgb(var(--border-1))] bg-body-1 text-heading-1">
                        <CardHeader>
                            <CardTitle className="text-heading-1">Confirm Action</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-heading-1">{message}</p>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2">
                            <Button onClick={cancel} className="text-heading-1 bg-body-3">
                                Cancel
                            </Button>
                            <Button onClick={confirm} className="bg-green-500/80 text-white hover:bg-green-600/80">
                                Confirm
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            );
        }, [showConfirmation, message, cancel, confirm]);

        return {showConfirm, ConfirmComponent};
    }