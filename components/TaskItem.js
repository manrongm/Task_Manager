import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

// Renders an individual task item
export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <View style={[styles.taskItem, task.completed && styles.taskCompleted]}>
      {/* Checkbox to toggle completion */}
      <TouchableOpacity onPress={onToggle} style={styles.checkbox}>
        <Text style={styles.checkboxText}>
          {task.completed ? '✅' : '⬜'}
        </Text>
      </TouchableOpacity>

      {/* Title and description */}
      <View style={styles.textContainer}>
        <Text style={[styles.title, task.completed && styles.strikeText]}>
          {task.title}
        </Text>
        {task.description ? (
          <Text style={[styles.description, task.completed && styles.strikeText]}>
            {task.description}
          </Text>
        ) : null}
      </View>

      {/* Delete button */}
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 14,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  taskCompleted: {
    backgroundColor: '#e6ffed',
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'sans-serif',
    }),
  },
  description: {
    fontSize: 14,
    color: '#555',
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'sans-serif-light',
    }),
  },
  strikeText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  deleteText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: Platform.select({
      ios: 'Helvetica Neue',
      android: 'sans-serif',
    }),
  }
});

