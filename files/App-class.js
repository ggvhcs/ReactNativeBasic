import React, { useState, useEffect } from "react";
import * as SQLite from "expo-sqlite";
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

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      termsAgreed: false,
    };
  }
  async initialDB(db) {
    try {
      await db.execAsync(
        "PRAGMA journal_mode = WAL; CREATE TABLE IF NOT EXISTS _jusers(_jusersid VARCHAR(50) NOT NULL UNIQUE PRIMARY KEY, username VARCHAR(15) NOT NULL UNIQUE, phone VARCHAR(15) NOT NULL UNIQUE)"
      );
    } catch (e) {
      console.log("error: ", e);
    }
  }
  //
  async addUsers() {
    try {
      const statement = await db.prepareAsync(
        "INSERT INTO _jusers(_jusersid,username)VALUES(1,'GGV','GGV555')"
      );
      console.log(statement.lastInsertRowId, statement.changes);
    } catch (e) {
      console.log(e);
    }
  }
  //
  getUsers() {
    try {
      const result = db.getAllSync("SELECT * FROM _jusers;");
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <SQLite.SQLiteProvider databaseName="jc.db" onInit={this.initialDB}>
        <View style={styles.container}>
          <Content />
        </View>
      </SQLite.SQLiteProvider>
    );
  }
}
//
function Content() {
  const db = SQLite.useSQLiteContext();
  const [users, setUsers] = useState([]);

  async function addUsers() {
    try {
      const statement = await db.prepareAsync(
        "INSERT INTO _jusers(id,username)VALUES(1,'AGB')"
      );
    } catch (e) {
      console.log(e);
    }
  }

  async function getUsers() {
    try {
      const result = await db.getAllSync("SELECT * FROM _jusers;");
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    addUsers();
    getUsers();
  }, []);
}
//
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
