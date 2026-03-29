# coding: utf-8

groupmates = [
    { "name": "Василий", "group": "912-2", "age": 19, "marks": [4, 3, 5, 5, 4] },
    { "name": "Анна", "group": "912-1", "age": 18, "marks": [3, 2, 3, 4, 3] },
    { "name": "Георгий", "group": "912-2", "age": 19, "marks": [3, 5, 4, 3, 5] },
    { "name": "Валентина", "group": "912-1", "age": 18, "marks": [5, 5, 5, 4, 5] }
]

def print_students(students):
    print(u"Имя студента".ljust(15), u"Группа".ljust(8), u"Возраст".ljust(8), u"Оценки".ljust(20))
    for student in students:
        print(student["name"].ljust(15), str(student["group"]).ljust(8),
              str(student["age"]).ljust(8), str(student["marks"]).ljust(20))
    print("\n")

def filter_students(students, required_avg):
    filtered = []
    for student in students:
        avg = sum(student["marks"]) / len(student["marks"])
        if avg >= required_avg:
            filtered.append(student)
    return filtered

if __name__ == '__main__':
    threshold = float(input("Введите минимальную среднюю оценку: "))
    print_students(filter_students(groupmates, threshold))