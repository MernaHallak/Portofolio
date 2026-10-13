import { describe, expect, it } from 'vitest';
import { skillIconRegistry } from '../components/sections/SkillCloud';
import { skillGroups, skills } from './site';

describe('skill data', () => {
  it('uses unique skill identifiers and names with valid groups and icon keys', () => {
    const groupIds = new Set(skillGroups.map((group) => group.id));
    const skillIds = skills.map((skill) => skill.id);
    const skillNames = skills.map((skill) => skill.name);
    expect(new Set(skillIds).size).toBe(skillIds.length);
    expect(new Set(skillNames).size).toBe(skillNames.length);
    expect(skills.every((skill) => groupIds.has(skill.group))).toBe(true);
    expect(skills.every((skill) => skill.icon in skillIconRegistry)).toBe(true);
    expect(skillGroups.every((group) => skills.some((skill) => skill.group === group.id))).toBe(
      true,
    );
  });
});
