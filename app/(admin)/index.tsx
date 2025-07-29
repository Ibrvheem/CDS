import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

type Student = {
    id: string;
    name: string;
    cdsNumber: string;
    image: string;
    timestamp: string;
};

const scannedStudents: Student[] = [
    {
        id: '1',
        name: 'Aliyu Ibrahim',
        cdsNumber: 'CDS001',
        image: 'https://i.pravatar.cc/100?img=1',
        timestamp: '7/29/2025, 9:00 AM',
    },
    {
        id: '2',
        name: 'Abdul Saidu',
        cdsNumber: 'CDS002',
        image: 'https://i.pravatar.cc/100?img=2',
        timestamp: '7/29/2025, 9:15 AM',
    },
    {
        id: '3',
        name: 'Fatima Ibrahim',
        cdsNumber: 'CDS003',
        image: 'https://i.pravatar.cc/100?img=3',
        timestamp: '7/28/2025, 10:30 AM',
    },
    {
        id: '4',
        name: 'Musa Zubair',
        cdsNumber: 'CDS004',
        image: 'https://i.pravatar.cc/100?img=4',
        timestamp: '7/28/2025, 11:00 AM',
    },
];

const handleNotificationPress = () => {
    console.log('Notifications clicked');
};

export default function CDSStudentListScreen() {
    const [searchFilter, setSearchFilter] = useState('');

    const filteredStudents = scannedStudents.filter(student => {
        const lowerFilter = searchFilter.toLowerCase();
        return (
            student.name.toLowerCase().includes(lowerFilter) ||
            student.timestamp.toLowerCase().includes(lowerFilter)
        );
    });

    const renderItem = ({ item }: { item: Student }) => (
        <View style={styles.card}>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.info}>CDS Number: {item.cdsNumber}</Text>
                <Text style={styles.info}>Time: {item.timestamp}</Text>
                <Text style={styles.present}>Present</Text>
            </View>
            <Image source={{ uri: item.image }} style={styles.image} />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent={false} />
            <View style={styles.header}>
                <View style={styles.profileSection}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>Hi, Abdulrahman</Text>
                </View>
                <TouchableOpacity onPress={handleNotificationPress}>
                    <Feather name="bell" size={24} color="#222" />
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.searchInput}
                placeholder="Search by name or date..."
                value={searchFilter}
                onChangeText={setSearchFilter}
                placeholderTextColor="#999"
            />

            <Text style={styles.title}>Scanned CDS Students</Text>

            <FlatList
                data={filteredStudents}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No students found.</Text>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    profileName: {
        color: '#222',
        fontSize: 16,
        fontWeight: '600',
    },
    searchInput: {
        height: 45,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 14,
        fontSize: 16,
        marginHorizontal: 16,
        marginBottom: 10,
        color: '#222',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: '#222',
        marginHorizontal: 18,
        marginBottom: 12,
    },
    list: {
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: 12,
        borderRadius: 10,
        marginBottom: 12,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    infoContainer: {
        flex: 1,
        paddingRight: 12,
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: '#222',
        marginBottom: 4,
    },
    info: {
        fontSize: 14,
        color: '#555',
    },
    present: {
        marginTop: 4,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2ecc71',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    emptyText: {
        textAlign: 'center',
        color: '#777',
        fontSize: 16,
        marginTop: 20,
    },
});
