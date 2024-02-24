import { UserRepository } from '../repositories';

export class UserQuery {
  constructor(private userRepository: UserRepository) {}

  async getLastUpdatedUserData(id: number): Promise<any> {
    const query = `
      SELECT
        user.name,
        user.email,
        user.phone_number,
        (
          SELECT sugar_level
          FROM Sugar AS s
          WHERE s.user_id = user.id
          ORDER BY s.measurement_date DESC
          LIMIT 1
        ) AS sugar_level,
        (
          SELECT measurement_date
          FROM Sugar AS s
          WHERE s.user_id = user.id
          ORDER BY s.measurement_date DESC
          LIMIT 1
        ) AS sugar_measurement_date,
        (
          SELECT systolic_pressure
          FROM BpHealth AS bp
          WHERE bp.user_id = user.id
          ORDER BY bp.measurement_date DESC
          LIMIT 1
        ) AS systolic_pressure,
        (
          SELECT diastolic_pressure
          FROM BpHealth AS bp
          WHERE bp.user_id = user.id
          ORDER BY bp.measurement_date DESC
          LIMIT 1
        ) AS diastolic_pressure,
        (
          SELECT measurement_date
          FROM BpHealth AS bp
          WHERE bp.user_id = user.id
          ORDER BY bp.measurement_date DESC
          LIMIT 1
        ) AS bp_measurement_date,
        (
          SELECT weight
          FROM WeightHistory AS w
          WHERE w.userId = user.id
          ORDER BY w.createdAt DESC
          LIMIT 1
        ) AS weight,
        (
          SELECT DATE(createdAt)
          FROM WeightHistory AS w
          WHERE w.userId = user.id
          ORDER BY w.createdAt DESC
          LIMIT 1
        ) AS weight_date,
        (
          SELECT TIME(createdAt)
          FROM WeightHistory AS w
          WHERE w.userId = user.id
          ORDER BY w.createdAt DESC
          LIMIT 1
        ) AS weight_time
      FROM user
      WHERE user.id = ${id};
    `;

    const result = await this.userRepository.dataSource.execute(query);

    return result[0] || null;
  }
}
