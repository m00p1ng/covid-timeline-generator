import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeTimelineEntryDetailToNullable1639892755525
  implements MigrationInterface
{
  name = 'ChangeTimelineEntryDetailToNullable1639892755525';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "timeline_entry" ALTER COLUMN "detail" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "timeline_entry" ALTER COLUMN "detail" SET NOT NULL`,
    );
  }
}
