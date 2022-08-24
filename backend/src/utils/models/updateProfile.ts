import {Profile} from "../interfaces/models";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';
import {Profile} from "./profile";

export async function updateProfile(profile: Profile): Promise<string>  {
  try {
    const mysqlConnection = await connect();
    const query : string = 'UPDATE models SET profileActivationToken = :profileActivationToken, profileAtHandle = :profileAtHandle, profileAvatarUrl = :profileAvatarUrl, profileEmail = :profileEmail,  profilePhone = :profilePhone WHERE profileId = UUID_TO_BIN(:profileId)';
    await mysqlConnection.execute(query, profile)
    return 'Profile successfully updated'
  } catch (error) {
    throw error
  }
}