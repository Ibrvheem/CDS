import { Feather } from '@expo/vector-icons';
import {
    BarcodeScanningResult,
    CameraView,
    useCameraPermissions,
} from 'expo-camera';
import * as Clipboard from 'expo-clipboard';
import { useFocusEffect } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
    AppState,
    Dimensions,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function QRScannerScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    const [hasPermission, setHasPermission] = useState(false);
    const [scannedData, setScannedData] = useState<string | null>(null);
    const [showCamera, setShowCamera] = useState(true);
    const qrLock = useRef(false);
    const appState = useRef(AppState.currentState);

    useEffect(() => {
        if (permission?.granted) setHasPermission(true);
    }, [permission]);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', (nextAppState) => {
            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === 'active'
            ) {
                qrLock.current = false;
            }
            appState.current = nextAppState;
        });

        return () => {
            subscription.remove();
            qrLock.current = false;
            setScannedData(null);
        };
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            setShowCamera(false);
            const timeout = setTimeout(() => {
                setShowCamera(true);
            }, 100);
            return () => clearTimeout(timeout);
        }, [])
    );

    const handleScan = (result: BarcodeScanningResult) => {
        if (result?.data && !qrLock.current) {
            qrLock.current = true;
            setScannedData(result.data);
        }
    };

    const handleCopy = async () => {
        if (scannedData) {
            await Clipboard.setStringAsync(scannedData);
        }
    };

    if (!hasPermission) {
        return (
            <View style={styles.centered}>
                <Text style={styles.permissionText}>Camera permission is required</Text>
                <Pressable onPress={requestPermission} style={styles.permissionButton}>
                    <Text style={styles.permissionButtonText}>Grant Permission</Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {showCamera && (
                <>
                    <CameraView
                        style={styles.camera}
                        facing="back"
                        onBarcodeScanned={handleScan}
                    />
                    <View style={styles.scanFrame}>
                        <View style={[styles.corner, styles.topLeft]} />
                        <View style={[styles.corner, styles.topRight]} />
                        <View style={[styles.corner, styles.bottomLeft]} />
                        <View style={[styles.corner, styles.bottomRight]} />
                    </View>

                </>
            )}

            {scannedData && (
                <View style={styles.resultBox}>
                    <Text numberOfLines={3} style={styles.resultText}>
                        {scannedData}
                    </Text>
                    <TouchableOpacity onPress={handleCopy} style={styles.copyButton}>
                        <Feather name="copy" size={18} color="#fff" />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    camera: {
        flex: 1,
    },
    resultBox: {
        position: 'absolute',
        bottom: 120,
        left: 20,
        right: 20,
        borderRadius: 10,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: '#444',
        backgroundColor: '#111',
    },
    resultText: {
        flex: 1,
        fontSize: 14,
        color: '#fff',
    },
    copyButton: {
        padding: 4,
    },
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#000',
    },
    permissionText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff',
    },
    permissionButton: {
        backgroundColor: '#0E7AFE',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    permissionButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    scanFrame: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 200,
        height: 200,
        transform: [{ translateX: -100 }, { translateY: -100 }],
        zIndex: 10,
    },
    corner: {
        width: 30,
        height: 30,
        borderColor: '#fff',
        position: 'absolute',
    },

    topLeft: {
        top: 0,
        left: 0,
        borderTopWidth: 4,
        borderLeftWidth: 4,
    },

    topRight: {
        top: 0,
        right: 0,
        borderTopWidth: 4,
        borderRightWidth: 4,
    },

    bottomLeft: {
        bottom: 0,
        left: 0,
        borderBottomWidth: 4,
        borderLeftWidth: 4,
    },

    bottomRight: {
        bottom: 0,
        right: 0,
        borderBottomWidth: 4,
        borderRightWidth: 4,
    },

});
