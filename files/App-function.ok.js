import React, { useEffect, useState } from "react";

import { SQLiteProvider, useSQLiteContext } from "expo-sqlite";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

export default function RegistrationForm(props) {
  const [language, setLanguage] = useState("ES");
  //Init DB.
  const initialDB = async (db) => {
    try {
      await db.execAsync(
        "PRAGMA journal_mode = WAL; CREATE TABLE IF NOT EXISTS _jusers(id INTEGER, username TEXT);"
      );
    } catch (e) {
      console.log("error: ", e);
    }
  };

  return (
    <SQLiteProvider databaseName="jc.db" onInit={initialDB}>
      <View style={styles.container}>
        <Content />
      </View>
    </SQLiteProvider>
  );
}

const Content = () => {
  const db = useSQLiteContext();
  const [users, setUsers] = useState([]);

  const addUsers = async () => {
    try {
      const statement = await db.prepareAsync(
        "INSERT INTO _jusers(id,username)VALUES(1,'GGV')"
      );
    } catch (e) {
      console.log(e);
    }
  };

  const getUsers = async () => {
    try {
      const result = await db.getAllSync("SELECT * FROM _jusers;");
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    addUsers();
    getUsers();
  }, []);
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxWrapper: {
    marginRight: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#2196F3", // Example: Blue when checked
    borderColor: "#2196F3",
  },
  checkmark: {
    color: "white",
    fontSize: 16,
  },
  termsText: {
    fontSize: 14,
  },
});
