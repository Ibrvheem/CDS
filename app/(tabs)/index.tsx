import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  BellIcon,
  CheckCircleIcon,
  ClockIcon,
  HomeIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";
import { ProgressBar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const monthAttendance = 3; // out of 4
  const overallAttendance = 18; // total since NYSC start

  const scheduleData = [
    { date: "July 28", event: "Digital Workshop" },
    { date: "August 4", event: "Outreach Program" },
    { date: "August 18", event: "Skills Training" },
    { date: "August 25", event: "Final Meetup" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.gradientHeader}>
        <SafeAreaView
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <View style={styles.profileSection}>
            <Image
              source="https://www.afterschoolafrica.com/wp-content/uploads/2018/03/Passport-Photograph.jpg"
              style={styles.profilePicture}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>Corper Ibrahim Aliyu</Text>
              <Text style={styles.details}>Batch 2025-C2 • Lagos</Text>
              <Text style={styles.subDetails}>Digital Onboarding CDS</Text>
            </View>
          </View>
          <Image
            source="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/NYSC_LOGO.svg/640px-NYSC_LOGO.svg.png"
            style={styles.nyscLogo}
          />
        </SafeAreaView>
      </View>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          {/* Next CDS Countdown */}
          <View style={styles.nextCdsCard}>
            <View style={styles.iconRow}>
              <ClockIcon size={24} color="#fff" />
              <Text style={styles.nextCdsLabel}>Next CDS Session</Text>
            </View>
            <Text style={styles.nextCdsTime}>3 Days 5 Hours</Text>
            <Text style={styles.nextCdsSub}>Friday • 10 AM • Ikeja Hall</Text>
          </View>

          {/* Attendance */}
          <Text style={styles.sectionTitle}>CDS Attendance This Month</Text>
          <View style={styles.attendanceCard}>
            <Text style={styles.attendanceNumber}>{monthAttendance} / 4</Text>
            <ProgressBar
              progress={monthAttendance / 4}
              color="#018749"
              style={styles.progressBar}
            />
            <Text style={styles.progressLabel}>
              Sessions Attended This Month
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Overall CDS Attendance</Text>
          <View style={styles.attendanceCard}>
            <Text style={styles.attendanceNumber}>{overallAttendance}</Text>
            <ProgressBar
              progress={overallAttendance / 20}
              color="#018749"
              style={styles.progressBar}
            />
            <Text style={styles.progressLabel}>
              Total Sessions Since NYSC Start
            </Text>
          </View>

          {/* Schedule Section */}
          <View style={styles.scheduleCard}>
            <View style={styles.cardHeader}>
              <BellIcon size={20} color="#018749" />
              <Text style={styles.cardTitle}>Your CDS Schedule</Text>
            </View>

            {scheduleData.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.eventItem,
                  index === 0 && {
                    backgroundColor: "#E9F7E9",
                    borderLeftColor: "#018749",
                  },
                ]}
              >
                <View style={styles.eventDate}>
                  <Text style={styles.eventDateText}>{item.date}</Text>
                </View>
                <View style={styles.eventInfo}>
                  <Text style={styles.eventName}>{item.event}</Text>
                  <Text style={styles.eventDetails}>10:00 AM • Ikeja Hall</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.venueFeatureCard}>
            <View style={styles.yellowRibbon} />
            <View style={styles.venueContent}>
              {" "}
              <View style={styles.cardHeader}>
                <HomeIcon size={20} color="#018749" />
                <Text style={styles.cardTitle}>CDS Venue & Schedule</Text>
              </View>
              <View style={styles.venueDetailRow}>
                <MapPinIcon size={20} color="#018749" />
                <Text style={styles.venueDetailText}>Ikeja Community Hall</Text>
              </View>
              <View style={styles.venueDetailRow}>
                <ClockIcon size={20} color="#018749" />
                <Text style={styles.venueDetailText}>Fridays • 10 AM</Text>
              </View>
              <View style={styles.venueDetailRow}>
                <BellIcon size={20} color="#018749" />
                <Text style={styles.venueDetailText}>
                  Coordinator: Mr. Johnson Okoro
                </Text>
              </View>
            </View>
          </View>

          {/* Clearance */}
          <View style={styles.clearanceCard}>
            <CheckCircleIcon size={28} color="#fff" />
            <Text style={styles.clearanceStatus}>Cleared for July</Text>
            <Text style={styles.cardProgress}>Next Clearance: August 15</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: "#F6F9F6", flex: 1 },

  gradientHeader: {
    backgroundColor: "#018749",
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  profileSection: { flexDirection: "row", alignItems: "center" },
  profilePicture: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#fff",
    marginRight: 12,
  },
  nyscLogo: {
    height: 64,
    width: 50,
  },
  profileInfo: { justifyContent: "center" },
  name: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  details: { fontSize: 14, color: "#E0F7E0" },
  subDetails: { fontSize: 13, color: "#D0F0D0", marginTop: 2 },
  nysfcLogo: { width: 50, height: 65, resizeMode: "contain" },

  nextCdsCard: {
    backgroundColor: "#018749",
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  iconRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  nextCdsLabel: { fontSize: 14, color: "#fff", fontWeight: "bold" },
  nextCdsTime: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  nextCdsSub: { fontSize: 14, color: "#E0F7E0", marginTop: 6 },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#018749",
    marginBottom: 14,
    marginHorizontal: 20,
  },

  attendanceCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
    elevation: 2,
  },
  attendanceNumber: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#018749",
    marginBottom: 10,
    alignSelf: "center",
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
  },
  progressLabel: {
    fontSize: 13,
    color: "#555",
    marginTop: 8,
    textAlign: "center",
  },

  scheduleCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  cardTitle: { fontSize: 16, fontWeight: "bold", color: "#018749" },

  eventItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#E0E0E0",
  },
  eventDate: { width: 60 },
  eventDateText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#018749",
  },
  eventInfo: { flex: 1, marginLeft: 12 },
  eventName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
  },
  eventDetails: {
    fontSize: 12,
    color: "#555",
    marginTop: 2,
  },
  venueFeatureCard: {
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5,
    flexDirection: "row",
  },

  yellowRibbon: {
    width: 8,
    backgroundColor: "#018749",
  },

  venueContent: {
    padding: 20,
    flex: 1,
  },

  venueTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#018749",
    marginBottom: 14,
  },

  venueDetailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 10,
  },

  venueDetailText: {
    fontSize: 15,
    color: "#333",
    fontWeight: "600",
  },

  clearanceCard: {
    marginHorizontal: 20,
    backgroundColor: "#018749",
    padding: 22,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 40,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  clearanceStatus: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  cardProgress: { fontSize: 14, color: "#D0F0D0", marginTop: 6 },
});
