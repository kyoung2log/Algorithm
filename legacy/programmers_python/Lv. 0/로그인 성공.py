def solution(id_pw, db):
    db_dic = {}
    for i, j in db:
        db_dic[i] = j
    try:
        if db_dic[id_pw[0]] == id_pw[1]:
            return 'login'
        else:
            return 'wrong pw'
    except:
        return 'fail'

def solution(id_pw, db):
    db = dict(db)
    try:
        if db[id_pw[0]] == id_pw[1]:
            return 'login'
        else:
            return 'wrong pw'
    except:
        return 'fail'