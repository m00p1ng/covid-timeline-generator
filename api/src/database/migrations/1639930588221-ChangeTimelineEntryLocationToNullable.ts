import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeTimelineEntryLocationToNullable1639930588221
  implements MigrationInterface
{
  name = 'ChangeTimelineEntryLocationToNullable1639930588221';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "timeline_entry" ALTER COLUMN "detail" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "timeline_entry" ALTER COLUMN "location" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "timeline_entry" ALTER COLUMN "location" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "timeline_entry" ALTER COLUMN "detail" DROP NOT NULL`,
    );
  }
}
