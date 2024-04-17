import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_ru {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, task_text: string, guildName: string): string {
                return `Крайний срок для задачи **${id}** истекает ${deadline} на сервере ${guildName}: ${task_text}`;
            },
            assigned_notification(guildName: string): string {
                return `Вас назначили на задачу на сервере ${guildName}`;
            },
            assigned_embed_title(id: string): string {
                return `Задача ${id} назначена`;
            },
            assigned_embed_footer: "Эти уведомления могут быть отключены администратором сервера с помощью команды \"/preferences direct_messages\"",
            deadline_was_in_past(id: string, task_text: string, guildName: string): string {
                return `Крайний срок для задачи ${id} истек в сервере ${guildName}: ${task_text}`;
            },
            repeat_notification(guildName: string): string {
                return `Задача, к которой вы назначены, была повторена и должна быть выполнена на сервере ${guildName}`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Задача ${id} повторена`;
            }
        },
        webhookLogging: {
            id_field: "Id",
            deadline_field: "Крайний срок",
            assignees_field: "Назначенные",
            status_field: "Статус",
            delete_at_field: "Удалить в",
            project_field: "Проект",
            text_field: "Текст",
            role_field: "Роль",
            user_field: "Пользователь",
            permission_field: "Право",
            preset_field: "Предустановка",
            priority_field: "Приоритет",
            label_field: "Метка",
            personal_field: "Личное",
            manager_field: "Менеджер",
            repeat_interval_field: "Интервал повторения в днях",
            repeat_end_date_field: "Дата окончания повторения",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "Todo";
                    case 1:
                        return "В процессе";
                    case 2:
                        return "Сделано";
                    default:
                        return "Неизвестно";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Крайний срок для задачи ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `Крайний срок для задачи **${id}** истекает ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Задача ${id} удалена.`;
                },
                description(id: string): string {
                    return `Задача ${id} была удалена из корзины.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Задача ${id} повторяется.`;
                },
                description(id: string): string {
                    return `Задача ${id} была повторена, а статус был установлен на todo.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Задача ${id} создана.`;
                },
                description(task_text: string, id: string): string {
                    return `Задача ${id} была создана с текстом: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Задача ${id} обновлена.`;
                },
                description(id: string): string {
                    return `Задача ${id} была обновлена, и были изменены следующие данные.`;
                }
            },
            project_created: {
                title: "Проект создан",
                description(projectName: string): string {
                    return `Проект ${projectName} был создан`;
                }
            },
            project_deleted: {
                title: "Проект удален",
                description(projectName: string): string {
                    return `Проект ${projectName} был удален`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Статус задачи ${id} изменен`;
                }
            },
            permission_revoked: {
                title: "Право отозвано",
            },
            permission_granted: {
                title: "Право предоставлено",
            },
            preset_applied: {
                title: "Предустановка применена",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `Крайний срок для задачи ${id} просрочен`;
                }
            },
            project_updated: {
                title: "Проект обновлен",
                description(name: string): string {
                    return `Проект ${name} был обновлен`;
                }
            },
            test_message: {
                title: "Это тестовое сообщение",
                description: "Если вы видите это сообщение, веб-крючок работает правильно, и включено ведение журнала."
            }
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, startTime: string): string {
                return `Предстоящее событие (${id}: ${name}) начнется через ${durationTillEventMinutes} минут в ${guildName}.`;
            }
        }
    }
}