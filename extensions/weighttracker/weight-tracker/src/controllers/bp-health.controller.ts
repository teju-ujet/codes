import { AnyObject, repository } from '@loopback/repository';
import { get, param, post, requestBody } from '@loopback/rest';
import { BpHealth } from '../models';
import { BpHealthRepository } from '../repositories';
import { UserRepository } from '../repositories';

export class BpHealthController {
  constructor(
    @repository(BpHealthRepository)
    public bpHealthRepository: BpHealthRepository,
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) {}

  @post('/bphealth')
  async createBpHealth(@requestBody() bpHealth: BpHealth): Promise<BpHealth> {
    return this.bpHealthRepository.create(bpHealth);
  }
   
  @get("/getbphealth")
  async getAllBphelth():Promise<BpHealth[]>{
    return this.bpHealthRepository.find();
  }

  @get('/users/{id}/bphealth')
  async getBpHealthDataByDateAndUserId(
    @param.path.number('id') id: number,
    @param.query.string('measurementDate') measurementDate: string,
  ): Promise<AnyObject | null> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    let targetDate = new Date(measurementDate);
    // 06:23:41
    //targetDate.setHours(6,23,41)
    const bpHealth = await this.bpHealthRepository.execute(`
      SELECT *
      FROM bphealth
      WHERE user_id = ${id}
        AND measurement_date = (
          SELECT MAX(a.measurement_date)
          FROM (
            SELECT measurement_date
            FROM bphealth
            WHERE user_id = ${id}
              AND DATE(measurement_date) = DATE('${targetDate.toISOString()}')
          ) as a
        );
    `);

    //  const bpHealth = await this.bpHealthRepository.execute(`
    //   SELECT *
    //   FROM bphealth
    //   WHERE user_id = ${id}
    //     AND DATE(measurement_date) = DATE('${targetDate.toISOString()}')
    //   ORDER BY measurement_date DESC
    //   LIMIT 1;
    // `);


    // const bpHealth = await this.bpHealthRepository.execute
    // ("SELECT * FROM bphealth where measurement_date = (SELECT MAX(a.measurement_date) FROM (SELECT * FROM bphealth WHERE DATE(measurement_date) = ) as a);")

    console.log('Retrieved BpHealth:', bpHealth);
    return bpHealth || null;
  }
}


