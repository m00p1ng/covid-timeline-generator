import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTimelineEntryTable1639890239501 implements MigrationInterface {
  name = 'AddTimelineEntryTable1639890239501';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "timeline_entry" ("id" SERIAL NOT NULL, "time_from" TIMESTAMP WITH TIME ZONE NOT NULL, "time_to" TIMESTAMP WITH TIME ZONE NOT NULL, "detail" character varying NOT NULL, "location_type" character varying NOT NULL, "location" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "patient_id" integer, CONSTRAINT "PK_61a61c7f75f9c69d73d7a2fd666" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "timeline_entry" ADD CONSTRAINT "FK_21ce5a89d6839d5d42afd8f94e2" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "timeline_entry" DROP CONSTRAINT "FK_21ce5a89d6839d5d42afd8f94e2"`,
    );
    await queryRunner.query(`DROP TABLE "timeline_entry"`);
  }
}
