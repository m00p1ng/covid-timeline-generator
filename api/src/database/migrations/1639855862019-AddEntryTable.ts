import {MigrationInterface, QueryRunner} from "typeorm";

export class AddEntryTable1639855862019 implements MigrationInterface {
    name = 'AddEntryTable1639855862019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "entry" ("id" SERIAL NOT NULL, "time_from" TIMESTAMP WITH TIME ZONE NOT NULL, "time_to" TIMESTAMP WITH TIME ZONE NOT NULL, "detail" character varying NOT NULL, "location_type" character varying NOT NULL, "location" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "patient_id" integer, CONSTRAINT "PK_a58c675c4c129a8e0f63d3676d6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "entry" ADD CONSTRAINT "FK_f37d32ee38a1fe177b2f5071902" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "entry" DROP CONSTRAINT "FK_f37d32ee38a1fe177b2f5071902"`);
        await queryRunner.query(`DROP TABLE "entry"`);
    }

}
