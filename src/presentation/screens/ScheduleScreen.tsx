import { 
    View, 
    Text, 
    SafeAreaView, 
    StyleSheet, 
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';
import React, { useMemo, useRef, useState } from 'react';
import moment from 'moment';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('screen');

export const ScheduleScreen = () => {

    // Generar fechas a partir de hoy
  const startDate = moment().startOf('week');
  const days = Array.from({ length: 7 }, (_, i) => startDate.clone().add(i, 'days'));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Schedule</Text>
      <Swiper showsPagination={false} loop={false}>
        {days.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayText}>{day.format('ddd')}</Text>
            <Text style={styles.dateText}>{day.format('DD')}</Text>
          </View>
        ))}
      </Swiper>
      <Text style={styles.date}>{moment().format('ddd MMM DD YYYY')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 24,
    },
    picker: {
        flex: 1,
        maxHeight: 100,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        paddingHorizontal: 16,
    },
    contentText: {
        fontSize: 17,
        fontWeight: '600',
        color: '#999',
        marginBottom: 12,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#303030',
        marginBottom: 12,
    },
    itemRow: {
        width,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginHorizontal: -4,
    },
    itemSchedule: {
        flex: 1,
        marginHorizontal: 4,
        paddingHorizontal: 4,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    itemWeekday: {
        fontSize: 13,
        fontWeight: '500',
        color: '#737373',
        marginBottom: 4,
    },
    itemDate: {
        fontSize: 15,
        fontWeight: '700',
        color: '#111',
    },
});
