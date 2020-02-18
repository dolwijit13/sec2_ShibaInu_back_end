import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { JobReqSkill } from './jobReqSkill.entity';
import { JobOptSkill } from './JobOptSkill.entity';

export enum Status {
    OPEN = 'open',
    PROCESS = 'process',
    CANCEL = 'cancel',
    FINISH = 'finish',
}

export enum Catergory {
    WEBSITE = 'open',
    SOFTWARE = 'process',
    MOBILE = 'cancel',
    GAME = 'finish',
    OTHER = 'other',
}

@Entity()
export class Job {
    @PrimaryGeneratedColumn()
    jobId: number;

    @Column('varchar', { length: 150 })
    name: string;

    @Column('text')
    description: string;

    @Column('text', { default: null })
    picture: string;

    @Column('integer')
    estimatedDuration: number;

    @Column('decimal', { precision: 15, scale: 2 })
    estimatedWage: number;

    @Column('enum', { enum: Status, default: Status.OPEN })
    status: Status;

    @Column('enum', { enum: Catergory })
    catergory: Catergory;

    @Column('timestamp')
    createdTime: Date;

    @ManyToOne(
        type => User,
        user => user.jobs,
    )
    client: User;

    @OneToMany(
        type => JobReqSkill,
        jobReqSkill => jobReqSkill.requiredSkill,
    )
    requiredSkills: JobReqSkill[];

    @OneToMany(
        type => JobOptSkill,
        jobOptSkill => jobOptSkill.optionalSkill,
    )
    optionalSkills: JobOptSkill[];
}
